const LoadingSpinner = ({ 
  size = 'md', 
  color = 'primary',
  text = '',
  className = '' 
}) => {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-4',
    xl: 'h-16 w-16 border-4',
  };

  const colors = {
    primary: 'border-primary border-t-transparent',
    white: 'border-white border-t-transparent',
    gray: 'border-gray-400 border-t-transparent',
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div 
        className={`animate-spin rounded-full ${sizes[size]} ${colors[color]}`}
      />
      {text && (
        <p className="text-gray-400 text-sm">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;