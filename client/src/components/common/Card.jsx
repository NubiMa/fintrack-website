const Card = ({ 
  children, 
  className = '',
  hover = false,
  ...props 
}) => {
  const baseStyles = 'glass rounded-xl p-6 shadow-card';
  const hoverStyles = hover ? 'glass-hover cursor-pointer' : '';

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;