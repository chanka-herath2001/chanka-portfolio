/** Layered shoreline — foam bands rolling at different speeds. */
const wavePath = (amp: number, len: number, y: number) => {
  let d = `M0 ${y}`;
  for (let x = 0; x <= 2400; x += len) d += ` q${len / 4} ${-amp} ${len / 2} 0 t${len / 2} 0`;
  return d + ` V200 H0 Z`;
};

const layers = [
  { color: "#ffe9c9", amp: 14, len: 160, y: 40, dur: 26, op: 0.95 },
  { color: "#ffb36b", amp: 18, len: 220, y: 70, dur: 19, op: 0.9 },
  { color: "#ff6a3d", amp: 12, len: 140, y: 100, dur: 14, op: 0.95 },
  { color: "#e0341a", amp: 20, len: 260, y: 130, dur: 11, op: 1 },
];

export default function Tide({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden>
      {layers.map((l, i) => (
        <svg key={i} viewBox="0 0 2400 200" preserveAspectRatio="none"
          className="absolute inset-0 h-full w-[200%]"
          style={{ animation: `wave ${l.dur}s linear infinite`, animationDirection: i % 2 ? "reverse" : "normal", opacity: l.op }}>
          <path d={wavePath(l.amp, l.len, l.y)} fill={l.color} />
        </svg>
      ))}
    </div>
  );
}
