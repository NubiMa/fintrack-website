// client/src/services/currencyService.js

const API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';
const CACHE_KEY = 'exchange_rates';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Fixed fallback rates (updated periodically)
const FIXED_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.50,
  IDR: 15750
};

// Currency symbols
export const CURRENCY_SYMBOLS = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  IDR: 'Rp'
};

// Currency names
export const CURRENCY_NAMES = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  IDR: 'Indonesian Rupiah'
};

export const currencyService = {
  /**
   * Get cached rates or fetch new ones
   */
  async getRates() {
    try {
      // Check cache first
      const cached = this.getCachedRates();
      if (cached) {
        console.log('Using cached exchange rates');
        return cached;
      }

      // Fetch fresh rates
      console.log('Fetching fresh exchange rates...');
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error('Failed to fetch rates');
      }

      const data = await response.json();
      const rates = data.rates;

      // Cache the rates
      this.cacheRates(rates);
      
      return rates;
    } catch (error) {
      console.error('Error fetching exchange rates, using fallback:', error);
      return FIXED_RATES;
    }
  },

  /**
   * Get cached rates from localStorage
   */
  getCachedRates() {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;

      const { rates, timestamp } = JSON.parse(cached);
      const now = Date.now();

      // Check if cache is still valid (24 hours)
      if (now - timestamp < CACHE_DURATION) {
        return rates;
      }

      // Cache expired
      localStorage.removeItem(CACHE_KEY);
      return null;
    } catch (error) {
      console.error('Error reading cached rates:', error);
      return null;
    }
  },

  /**
   * Cache rates to localStorage
   */
  cacheRates(rates) {
    try {
      const cacheData = {
        rates,
        timestamp: Date.now()
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.error('Error caching rates:', error);
    }
  },

  /**
   * Convert amount from one currency to another
   */
  async convert(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) {
      return amount;
    }

    const rates = await this.getRates();

    // Convert to USD first (base currency)
    const amountInUSD = amount / rates[fromCurrency];
    
    // Then convert to target currency
    const convertedAmount = amountInUSD * rates[toCurrency];

    return convertedAmount;
  },

  /**
   * Format currency with proper symbol
   */
  format(amount, currency = 'USD', showSymbol = true) {
    const numAmount = parseFloat(amount);
    
    if (isNaN(numAmount)) return showSymbol ? `${CURRENCY_SYMBOLS[currency]}0.00` : '0.00';

    // Format based on currency
    let formatted;
    
    if (currency === 'JPY' || currency === 'IDR') {
      // No decimals for JPY and IDR
      formatted = Math.round(numAmount).toLocaleString('en-US');
    } else {
      // 2 decimals for others
      formatted = numAmount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }

    if (!showSymbol) return formatted;

    // Return with symbol
    const symbol = CURRENCY_SYMBOLS[currency];
    
    // IDR puts symbol after number
    if (currency === 'IDR') {
      return `${symbol} ${formatted}`;
    }
    
    return `${symbol}${formatted}`;
  },

  /**
   * Get user's selected currency
   */
  getUserCurrency() {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      return user?.currency || 'USD';
    } catch (error) {
      return 'USD';
    }
  },

  /**
   * Convert and format amount to user's currency
   */
  async convertAndFormat(amount, fromCurrency = 'USD') {
    const userCurrency = this.getUserCurrency();
    
    if (fromCurrency === userCurrency) {
      return this.format(amount, userCurrency);
    }

    const converted = await this.convert(amount, fromCurrency, userCurrency);
    return this.format(converted, userCurrency);
  },

  /**
   * Clear cache (useful for manual refresh)
   */
  clearCache() {
    localStorage.removeItem(CACHE_KEY);
  },

  /**
   * Force refresh rates
   */
  async forceRefresh() {
    this.clearCache();
    return await this.getRates();
  }
};

export default currencyService;