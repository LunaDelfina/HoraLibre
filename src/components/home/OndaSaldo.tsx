import { useEffect, useState, type CSSProperties } from "react";

type OndaSaldoProps = {
  className?: string;
};

const WAVE_REPOSO =
  "M0 0H402V206C402 206 358 246 300 238C242 230 230 196 176 196C122 196 104 252 40 248C22 247 0 232 0 232V0Z";

const WAVE_RESPIRO =
  "M0 0H402V206C402 206 358 240 300 232C242 224 230 202 176 202C122 202 104 246 40 242C22 241 0 232 0 232V0Z";

export default function OndaSaldo({ className = "absolute inset-0 w-full h-full" }: OndaSaldoProps) {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;
    let timerId: number;

    const tick = () => {
      setPhase((p) => (p === 0 ? 1 : 0));
      timerId = window.setTimeout(() => {
        if (!cancelled) tick();
      }, 4500);
    };

    timerId = window.setTimeout(tick, 4500);

    return () => {
      cancelled = true;
      window.clearTimeout(timerId);
    };
  }, [reducedMotion]);

  const isBreathing = !reducedMotion && phase === 1;

  const pathStyle: CSSProperties = {
    transition: "d 4.5s ease-in-out",
  };

  return (
    <svg
      viewBox="0 0 402 260"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <path d={isBreathing ? WAVE_RESPIRO : WAVE_REPOSO} fill="#F2653C" style={pathStyle} />
    </svg>
  );
}
