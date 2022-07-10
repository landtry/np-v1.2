import React from "react";
import ProgressRing from "./ProgressRing";

interface CardProps {
  section_number: string;
  title: string;
  progress: number | null | undefined;
  score: number | null | undefined;
}

function DashboardDetailsCard(props: CardProps) {
  const getProgressColor = () => {
    if (props.progress === 100) {
      return "#11DE00";
    }
    return "#F4F6FA";
  };

  const getScoreColor = () => {
    let score = props.score;
    if (!score) {
      return "#FF0000";
    }
    if (score >= 0 && score < 20) {
      return "#FF0000";
    } else if (score >= 20 && score < 50) {
      return "#FF9D00";
    } else if (score >= 50 && score < 80) {
      return "#FFE200";
    } else if (score >= 80 && score <= 100) {
      return "#11DE00";
    }
    return "#FF0000";
  };
  return (
    <li className="col-span-1 flex justify-between items-center bg-white rounded-2xl overflow-hidden shadow-custom  h-full border border-custom-slate-300">
      <div className="flex flex-col justify-between items-start h-full py-4 px-5">
        <span className="text-sm font-bold capitalize">{`${props.section_number
          .split("_")
          .join(".")
          .toUpperCase()} ${props.title}`}</span>
        <span className="text-custom-gray-400 text-xs font-medium">
          Updated 00/00/0000
        </span>
      </div>
      <div className="flex flex-col justify-between items-end h-full bg-custom-blue-800 text-custom-slate-200 py-4 px-5">
        <div className="flex items-center ">
          <span className="uppercase text-3xs font-bold tracking-wider mr-2">
            PROGRESS
          </span>
          <ProgressRing
            progress={props.progress ?? 0}
            radius={25}
            stroke={4}
            bottomColor={"#44577C"}
            topColor={getProgressColor()}
          />
        </div>

        <div className="h-3"></div>

        <div className="flex items-center">
          <span className="uppercase text-3xs font-bold tracking-wider mr-2">
            SCORE
          </span>
          <ProgressRing
            progress={props.score ?? 0}
            radius={25}
            stroke={1}
            bottomColor={getScoreColor()}
            topColor={getScoreColor()}
          />
        </div>
      </div>
    </li>
  );
}

export default DashboardDetailsCard;
