import { useEffect, useRef, useState } from "react";

type OndaSaldoProps = {
  className?: string;
};

const WAVE_REPOSO =
  "M0 0H402V206C402 206 358 246 300 238C242 230 230 196 176 196C122 196 104 252 40 248C22 247 0 232 0 232V0Z";

const WAVE_RESPIRO =
  "M0 0H402V206C402 206 358 240 300 232C242 224 230 202 176 202C122 202 104 246 40 242C22 241 0 232 0 232V0Z";

const CYCLE_MS = 4500;
const NUM_RE = /-?\d*\.?\d+/g;

// Both waves share the same command structure, so the numbers can be
// interpolated in place — this avoids CSS transitions on the `d`
// attribute, which mobile browsers (iOS Safari, Capacitor WebView) don't
// animate reliably.
function interpolatePath(from: string, to: string, t: number): string {
  const toNums = to.match(NUM_RE)!.map(Number);
  let i = 0;
  return from.replace(NUM_RE, (match) => {
    const fromNum = Number(match);
    const value = fromNum + (toNums[i] - fromNum) * t;
    i += 1;
    return String(Math.round(value * 100) / 100);
  });
}

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function OndaSaldo({ className = "absolute inset-0 w-full h-full" }: OndaSaldoProps) {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || !pathRef.current) return;

    let frameId: number;
    let direction: 1 | -1 = 1;
    let start = performance.now();

    const animate = (now: number) => {
      const t = Math.min((now - start) / CYCLE_MS, 1);
      const eased = easeInOutQuad(t);
      const from = direction === 1 ? WAVE_REPOSO : WAVE_RESPIRO;
      const to = direction === 1 ? WAVE_RESPIRO : WAVE_REPOSO;
      pathRef.current?.setAttribute("d", interpolatePath(from, to, eased));

      if (t >= 1) {
        direction = direction === 1 ? -1 : 1;
        start = now;
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [reducedMotion]);

  return (
    <svg
      viewBox="0 0 402 260"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <path ref={pathRef} d={WAVE_REPOSO} fill="#F2653C" />
    </svg>
  );
}
