// https://css-tricks.com/building-progress-ring-quickly/

import React from "react";

interface RingProps {
  radius: number;
  stroke: number;
  progress: number;
  topColor: string;
  bottomColor: string;
}

function ProgressRing({
  radius,
  stroke,
  progress,
  topColor,
  bottomColor,
}: RingProps) {
  const _progress = 2;
  const normalizedRadius = radius - stroke + 2;
  const circumference = normalizedRadius * Math.PI * 2;
  const increment = circumference / 100;

  return (
    <div
      className="relative flex justify-center items-center font-bold text-sm"
      style={{ width: "50px", height: "50px" }}>
      <svg
        className="rotate-90 absolute top-0 right-0 overflow-visible"
        height={radius * 2}
        width={radius * 2}>
        <circle
          stroke={bottomColor}
          strokeLinecap="round"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <svg
        className="-rotate-90 absolute top-0 right-0 overflow-visible"
        height={radius * 2}
        width={radius * 2}>
        <circle
          stroke={topColor}
          strokeLinecap="round"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={
            progress
              ? circumference - progress * increment
              : circumference - 0 * increment
          }
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      <span>{progress ?? 0}</span>
      <sup className="mt-2">%</sup>
    </div>
  );
}

export default ProgressRing;
