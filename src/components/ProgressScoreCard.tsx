import React from "react";
import ProgressRing from "./ProgressRing";
import ProgressRingLarge from "./ProgressRingLarge";

interface CardProps {
  progress: number;
  score: number;
}

function ProgressScoreCard({ progress, score }: CardProps) {
  const getProgressColor = () => {
    if (progress === 100) {
      return "#11DE00";
    }
    return "#F4F6FA";
  };

  const getScoreColor = () => {
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
    <>
      <div className="min-h-max block relative">
        <div className="w-68"></div>
        <div className="bg-custom-blue-800 rounded-2xl p-5 fixed top-40">
          <div className="top flex justify-center items-start">
            <div className="flex flex-col items-center justify-center text-custom-slate-100">
              <span className="font-bold text-1xs tracking-wider uppercase">
                Progress
              </span>
              <ProgressRingLarge
                width="110px"
                progress={progress}
                radius={55}
                stroke={8}
                bottomColor="#44577C"
                topColor={getProgressColor()}
              />
            </div>
            <div className="w-5"></div>
            <div className="flex flex-col items-center justify-center text-custom-slate-100">
              <span className="font-bold text-1xs tracking-wider uppercase">
                Score
              </span>
              <div className="h-0.5"></div>
              <ProgressRingLarge
                width={"100px"}
                progress={progress}
                radius={50}
                stroke={2}
                bottomColor={getScoreColor()}
                topColor={getScoreColor()}
              />
            </div>
            <div className=""></div>
          </div>
          <div className=""></div>
        </div>
      </div>{" "}
    </>
  );
}

export default ProgressScoreCard;
