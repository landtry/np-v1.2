import Image from "next/image";
import React from "react";

interface IconProps {
  src: string | null;
}

function EntityIcon({ src }: IconProps) {
  if (!src) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 846.66 846.66"
        x="0px"
        y="0px"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#8190A3">
        <g>
          <path
            className="fil0"
            d="M377.88 274.41l-60.8 -14.82 -107.36 68.87 0 418.23 -96.41 0 0 -68.38c2.99,0.67 6.12,1.01 9.31,1.01 23.53,0 42.59,-19.05 42.59,-42.57 0,-13.1 -5.91,-24.81 -15.2,-32.61 9.29,-7.82 15.2,-19.54 15.2,-32.63 0,-20.02 -13.8,-36.8 -32.42,-41.36 -2.97,-16.09 -17.07,-28.28 -34.02,-28.28 -16.95,0 -31.06,12.19 -34,28.27 -18.62,4.56 -32.45,21.33 -32.45,41.37 0,13.09 5.9,24.81 15.22,32.63 -9.32,7.8 -15.22,19.51 -15.22,32.61 0,23.52 19.06,42.57 42.59,42.57 3.19,0 6.31,-0.34 9.3,-1.01l0 68.38 -48.17 0 0 29.09c258.2,0 516.37,0 774.57,0l0 -29.09 -48.19 0 0 -68.38c3.01,0.67 6.13,1.01 9.32,1.01 23.53,0 42.59,-19.05 42.59,-42.57 0,-13.1 -5.9,-24.81 -15.2,-32.61 9.3,-7.82 15.2,-19.54 15.2,-32.63 0,-20.02 -13.8,-36.8 -32.42,-41.36 -2.97,-16.09 -17.07,-28.28 -34.02,-28.28 -16.95,0 -31.05,12.19 -34,28.27 -18.62,4.56 -32.45,21.33 -32.45,41.37 0,13.09 5.91,24.81 15.23,32.63 -9.32,7.8 -15.23,19.51 -15.23,32.61 0,23.52 19.06,42.57 42.59,42.57 3.19,0 6.31,-0.34 9.3,-1.01l0 68.38 -96.4 0 0 -647.87 -114.65 -27.93 -144.4 92.64 0 110.88zm-139.06 437.64l76.37 -49.36 0 -46.59 -76.37 49.36 0 46.59zm76.37 -14.78l-76.37 49.36 0 0.06 76.37 0 0 -49.42zm-76.37 -66.39l76.37 -49.36 0 -46.61 -76.37 49.36 0 46.61zm0 -81.19l76.37 -49.35 0 -46.66 -76.37 49.36 0 46.65zm0 -81.11l76.37 -49.36 0 -46.71 -76.37 49.36 0 46.71zm0 -81.17l76.37 -49.36 0 -42.73 -76.37 48.98 0 43.11zm168.15 322.1l121.21 -78.33 0 -46.59 -121.21 78.33 0 46.59zm121.21 -43.75l-121.21 78.33 0 2.6 121.21 0 0 -80.93zm-121.21 -37.42l121.21 -78.33 0 -46.61 -121.21 78.33 0 46.61zm0 -81.18l121.21 -78.34 0 -46.66 -121.21 78.34 0 46.66zm0 -81.12l121.21 -78.34 0 -46.71 -121.21 78.34 0 46.71zm0 -81.17l121.21 -78.34 0 -46.73 -121.21 78.35 0 46.72zm0 -81.19l121.21 -78.34 0 -46.65 -121.21 78.33 0 46.66zm0 -81.24l121.21 -78.33 0 -41.94 -0.65 -0.15 -120.56 77.34 0 43.08z"></path>
        </g>
      </svg>
    );
  }

  return <Image className={" "} src={src} alt="entity logo" />;
}

export default EntityIcon;