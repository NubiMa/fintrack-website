// client/src/hooks/useCurrency.js

import { useState, useEffect } from 'react';
import currencyService from '../services/currencyService';

export const useCurrency = () => {
  const [currency, setCurrency] = useState('USD');
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCurrency();
  }, []);

  const loadCurrency = async () => {
    try {
      setLoading(true);
      
      // Get user's currency
      const userCurrency = currencyService.getUserCurrency();
      setCurrency(userCurrency);
      
      // Load exchange rates
      const exchangeRates = await currencyService.getRates();
      setRates(exchangeRates);
    } catch (error) {
      console.error('Error loading currency:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Format amount in user's currency
   */
  const formatAmount = (amount, showSymbol = true) => {
    return currencyService.format(amount, currency, showSymbol);
  };

  /**
   * Convert amount from base currency (USD) to user's currency
   */
  const convertFromBase = async (amount) => {
    return await currencyService.convert(amount, 'USD', currency);
  };

  /**
   * Convert amount to base currency (USD) from user's currency
   */
  const convertToBase = async (amount) => {
    return await currencyService.convert(amount, currency, 'USD');
  };

  /**
   * Refresh exchange rates
   */
  const refreshRates = async () => {
    setLoading(true);
    const newRates = await currencyService.forceRefresh();
    setRates(newRates);
    setLoading(false);
  };

  return {
    currency,
    rates,
    loading,
    formatAmount,
    convertFromBase,
    convertToBase,
    refreshRates,
    setCurrency
  };
};