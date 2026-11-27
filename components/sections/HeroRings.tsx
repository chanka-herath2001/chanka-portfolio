/** Concentric calibration rings with tick marks — rotate slowly at different rates. */
export default function Rings() {
  const ticks = Array.from({ length: 72 });
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" fill="none" stroke="currentColor">
      <g className="spin-slow" style={{ transformOrigin: "200px 200px" }}>
        <circle cx="200" cy="200" r="190" strokeOpacity=".35" />
        {ticks.map((_, i) => (
          <line key={i} x1="200" y1="10" x2="200" y2={i % 6 === 0 ? 26 : 17}
            transform={`rotate(${i * 5} 200 200)`} strokeOpacity={i % 6 === 0 ? 0.9 : 0.4} />
        ))}
      </g>
      <g className="spin-rev" style={{ transformOrigin: "200px 200px" }}>
        <circle cx="200" cy="200" r="150" strokeDasharray="2 10" strokeOpacity=".7" />
        <path d="M200 50 A150 150 0 0 1 350 200" strokeWidth="3" />
        <path d="M200 350 A150 150 0 0 1 50 200" strokeWidth="3" strokeOpacity=".5" />
      </g>
      <g className="spin-slow" style={{ transformOrigin: "200px 200px", animationDuration: "60s" }}>
        <polygon points="200,95 291,147 291,253 200,305 109,253 109,147" strokeOpacity=".45" />
        <circle cx="200" cy="95" r="4" fill="currentColor" />
      </g>
      <line x1="0" y1="200" x2="400" y2="200" strokeOpacity=".15" />
      <line x1="200" y1="0" x2="200" y2="400" strokeOpacity=".15" />
    </svg>
  );
}
