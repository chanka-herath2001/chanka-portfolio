/** Procedural city silhouette with flickering windows — deterministic so SSR matches. */
const rand = (s: number) => { let t = (s * 2654435761) >>> 0; t ^= t >>> 15; t = Math.imul(t, 2246822519) >>> 0; t = (t ^ (t >>> 13)) >>> 0; return (t % 10000) / 10000; };

const buildings = Array.from({ length: 70 }, (_, i) => {
  const w = Math.round(18 + rand(i) * 34);
  const h = Math.round(40 + rand(i + 100) * 160) + (i % 9 === 0 ? 80 : 0);
  return { w, h };
});

let acc = 0;
const placed = buildings.map((b) => { const x = acc; acc += b.w + 2; return { ...b, x }; });
const W = acc;

export default function Skyline() {
  return (
    <svg viewBox={`0 0 ${W} 300`} preserveAspectRatio="none" className="h-full w-full">
      {placed.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={300 - b.h} width={b.w} height={b.h} fill="currentColor" />
          {i % 9 === 0 && (
            <>
              <line x1={b.x + b.w / 2} y1={300 - b.h} x2={b.x + b.w / 2} y2={300 - b.h - 22} stroke="currentColor" strokeWidth="2" />
              <circle cx={b.x + b.w / 2} cy={300 - b.h - 22} r="2" fill="#ff3b5c" className="blink" />
            </>
          )}
          {Array.from({ length: Math.floor(b.h / 16) }).map((_, j) =>
            rand(i * 31 + j) > 0.72 ? (
              <rect key={j} x={Math.round(b.x + 4 + rand(i + j) * (b.w - 10))} y={300 - b.h + 8 + j * 14} width="3" height="4"
                fill={rand(j + i * 7) > 0.5 ? "#ffb3d4" : "#ffd28a"} opacity={0.35 + rand(j * i) * 0.6}
                className={rand(i * j + 3) > 0.9 ? "blink" : undefined} />
            ) : null,
          )}
        </g>
      ))}
    </svg>
  );
}
