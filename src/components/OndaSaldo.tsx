import { useEffect, useState, type CSSProperties } from "react";

type OndaSaldoProps = {
  className?: string;
};

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
      }, 4200);
    };

    timerId = window.setTimeout(tick, 4200);

    return () => {
      cancelled = true;
      window.clearTimeout(timerId);
    };
  }, [reducedMotion]);

  const isFloating = !reducedMotion && phase === 1;

  const circleStyle: CSSProperties = {
    transformBox: "fill-box",
    transformOrigin: "center",
    transform: isFloating ? "translate(5px, -5px) scale(1.02)" : "translate(-4px, 3px) scale(1)",
    transition: "transform 4s ease-in-out",
  };

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <circle cx="90" cy="340" r="260" fill="#FCF7EE" style={circleStyle} />
    </svg>
  );
}
