import { useEffect, useId, useState, type CSSProperties } from "react";

type OjosMascotaProps = {
  className?: string;
};

type Gaze = { x: number; y: number };

const GAZE_REST: Gaze = { x: 0, y: 0 };

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function OjosMascota({ className = "w-14 h-auto" }: OjosMascotaProps) {
  const id = useId();
  const clipIzq = `ojos-mascota-izq-${id}`;
  const clipDer = `ojos-mascota-der-${id}`;

  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [blink, setBlink] = useState(false);
  const [gaze, setGaze] = useState<Gaze>(GAZE_REST);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;
    const timers: number[] = [];

    const schedule = (fn: () => void, ms: number) => {
      const timerId = window.setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timers.push(timerId);
    };

    function blinkOnce(onDone: () => void) {
      setBlink(true);
      schedule(() => {
        setBlink(false);
        onDone();
      }, 120);
    }

    function blinkLoop() {
      schedule(() => {
        blinkOnce(() => {
          const isDoubleBlink = Math.random() < 0.2;
          if (isDoubleBlink) {
            schedule(() => blinkOnce(blinkLoop), 150);
          } else {
            blinkLoop();
          }
        });
      }, randomBetween(4000, 7000));
    }

    function gazeLoop() {
      schedule(() => {
        setGaze({ x: randomBetween(-8, 2), y: randomBetween(-2, 4) });
        schedule(() => {
          setGaze(GAZE_REST);
          gazeLoop();
        }, randomBetween(900, 1600));
      }, randomBetween(2500, 5000));
    }

    blinkLoop();
    gazeLoop();

    return () => {
      cancelled = true;
      timers.forEach((timerId) => window.clearTimeout(timerId));
    };
  }, [reducedMotion]);

  const isBlinking = !reducedMotion && blink;
  const activeGaze = reducedMotion ? GAZE_REST : gaze;

  const eyeGroupStyle = (originX: number, originY: number): CSSProperties => ({
    transformBox: "fill-box",
    transformOrigin: `${originX}px ${originY}px`,
    transform: isBlinking ? "scaleY(0.05)" : "scaleY(1)",
    transition: "transform 120ms ease-in-out",
  });

  const pupilStyle: CSSProperties = {
    transform: `translate(${activeGaze.x}px, ${activeGaze.y}px)`,
    transition: "transform 400ms ease-out",
  };

  return (
    <svg
      width="76"
      height="36"
      viewBox="0 0 76 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g clipPath={`url(#${clipIzq})`} style={eyeGroupStyle(18, 18)}>
        <rect width="36" height="36" rx="18" fill="#FFF8EF" />
        <ellipse cx="27" cy="16" rx="12.5" ry="15.5" fill="#3C3633" style={pupilStyle} />
      </g>
      <g clipPath={`url(#${clipDer})`} style={eyeGroupStyle(58, 18)}>
        <rect x="40" width="36" height="36" rx="18" fill="#FFF8EF" />
        <ellipse cx="67" cy="16" rx="12.5" ry="15.5" fill="#3C3633" style={pupilStyle} />
      </g>
      <defs>
        <clipPath id={clipIzq}>
          <rect width="36" height="36" rx="18" fill="white" />
        </clipPath>
        <clipPath id={clipDer}>
          <rect x="40" width="36" height="36" rx="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
