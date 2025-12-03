const SummaryCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendValue,
  color = 'primary',
  className = '' 
}) => {
  const colors = {
    primary: 'border-primary',
    green: 'border-green-500',
    red: 'border-red-500',
    orange: 'border-orange-500',
    purple: 'border-purple-500',
  };

  const iconColors = {
    primary: 'text-primary bg-primary/20',
    green: 'text-green-500 bg-green-500/20',
    red: 'text-red-500 bg-red-500/20',
    orange: 'text-orange-500 bg-orange-500/20',
    purple: 'text-purple-500 bg-purple-500/20',
  };

  const trendColors = {
    up: 'text-green-500',
    down: 'text-red-500',
    neutral: 'text-gray-400',
  };

  return (
    <div className={`card border-l-4 ${colors[color]} ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-400 text-sm">{title}</p>
        {Icon && (
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconColors[color]}`}>
            <Icon className="w-6 h-6" />
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      
      {trend && trendValue && (
        <p className={`text-sm ${trendColors[trend]}`}>
          {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
        </p>
      )}
    </div>
  );
};

export default SummaryCard;