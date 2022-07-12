import React from "react";
import { getDate } from "../helpers/normalize";
import ProgressRing from "./ProgressRing";

interface CardProps {
  section_number: string;
  title: string;
  progress: number | null | undefined;
  score: number | null | undefined;
  updated: string | undefined;
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
    <li className="tandistion-shadow col-span-1 flex h-full items-center justify-between overflow-hidden rounded-2xl  border border-custom-slate-300 bg-white shadow-custom duration-300 hover:shadow-customlg">
      <div className="flex h-full flex-col items-start justify-between py-4 px-5">
        <span className="text-sm font-bold capitalize">{`${props.section_number
          .split("_")
          .join(".")
          .toUpperCase()} ${props.title}`}</span>
        <span className="text-xs font-medium text-custom-gray-400">
          Updated {props.updated ? getDate(props.updated).date : "00/00/0000"}
        </span>
      </div>
      <div className="flex h-full flex-col items-end justify-between bg-custom-blue-800 py-4 px-5 text-custom-slate-200">
        <div className="flex items-center ">
          <span className="mr-2 text-3xs font-bold uppercase tracking-wider">
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
          <span className="mr-2 text-3xs font-bold uppercase tracking-wider">
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
