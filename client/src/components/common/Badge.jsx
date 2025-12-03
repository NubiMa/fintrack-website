const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}) => {
  const variants = {
    primary: 'bg-primary/20 text-primary border border-primary/30',
    success: 'bg-green-500/20 text-green-500 border border-green-500/30',
    danger: 'bg-red-500/20 text-red-500 border border-red-500/30',
    warning: 'bg-orange-500/20 text-orange-500 border border-orange-500/30',
    info: 'bg-blue-500/20 text-blue-500 border border-blue-500/30',
    secondary: 'bg-gray-500/20 text-gray-400 border border-gray-500/30',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span className={`inline-flex items-center rounded font-medium ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;