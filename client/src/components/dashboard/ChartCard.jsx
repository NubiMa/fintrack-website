const ChartCard = ({ title, children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {title && (
        <h3 className="text-xl font-bold mb-4">{title}</h3>
      )}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;