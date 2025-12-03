const BudgetProgress = ({ 
  category, 
  spent, 
  limit, 
  period = 'monthly' 
}) => {
  const percentage = (spent / limit) * 100;
  const remaining = limit - spent;

  const getColor = () => {
    if (percentage >= 100) return 'red';
    if (percentage >= 80) return 'orange';
    return 'primary';
  };

  const color = getColor();

  const colorClasses = {
    red: {
      bar: 'bg-red-500',
      text: 'text-red-500',
      bg: 'bg-red-500/20'
    },
    orange: {
      bar: 'bg-orange-500',
      text: 'text-orange-500',
      bg: 'bg-orange-500/20'
    },
    primary: {
      bar: 'bg-primary',
      text: 'text-primary',
      bg: 'bg-primary/20'
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold">{category}</h4>
          <p className="text-xs text-gray-400 capitalize">{period}</p>
        </div>
        <div className="text-right">
          <p className={`font-bold ${colorClasses[color].text}`}>
            ${spent.toFixed(2)} / ${limit.toFixed(2)}
          </p>
          <p className="text-xs text-gray-400">
            ${remaining.toFixed(2)} remaining
          </p>
        </div>
      </div>

      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${colorClasses[color].bar} transition-all duration-300`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>

      <div className="flex justify-between text-xs">
        <span className="text-gray-400">{percentage.toFixed(1)}% used</span>
        {percentage >= 100 ? (
          <span className="text-red-500 font-semibold">Over budget!</span>
        ) : percentage >= 80 ? (
          <span className="text-orange-500 font-semibold">Warning</span>
        ) : (
          <span className="text-green-500">On track</span>
        )}
      </div>
    </div>
  );
};

export default BudgetProgress;