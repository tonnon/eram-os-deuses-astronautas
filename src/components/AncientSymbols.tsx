
export const AncientSymbols = () => {
  const symbols = [
    { symbol: "𓀀", x: 10, y: 20, rotate: 45 },
    { symbol: "𓂀", x: 85, y: 15, rotate: -30 },
    { symbol: "𓊪", x: 15, y: 80, rotate: 60 },
    { symbol: "𓋹", x: 90, y: 75, rotate: -45 },
    { symbol: "𓎡", x: 50, y: 10, rotate: 0 },
    { symbol: "𓏏", x: 5, y: 50, rotate: 90 },
    { symbol: "𓐍", x: 95, y: 45, rotate: -60 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {symbols.map((item, index) => (
        <div
          key={index}
          className="absolute text-amber-400/20 text-4xl md:text-6xl font-bold animate-pulse"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `translate(-50%, -50%) rotate(${item.rotate}deg)`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + index * 0.5}s`,
          }}
        >
          {item.symbol}
        </div>
      ))}
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-amber-400/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-amber-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 left-3/4 w-16 h-16 bg-gradient-to-r from-amber-400/10 to-transparent transform rotate-12 animate-bounce" style={{ animationDuration: '3s' }}></div>
    </div>
  );
};
