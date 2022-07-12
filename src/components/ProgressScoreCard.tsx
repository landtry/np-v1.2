import React from "react";
import ProgressRing from "./ProgressRing";
import ProgressRingLarge from "./ProgressRingLarge";
import ISO_27001 from "../templates/iso_27001.json";

interface CardProps {
  progress: number;
  score: number;
  section_number: string;
}

function ProgressScoreCard({ progress, score, section_number }: CardProps) {
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

  const sections = ISO_27001.sections.filter(
    (section) => section.section_number === section_number
  )[0];

  return (
    <>
      <div className="relative block min-h-max">
        <div className="w-68"></div>
        <div className="fixed top-40 rounded-2xl bg-custom-blue-800 shadow-customlg">
          <div className="top flex items-start justify-center  p-5 ">
            <div className="flex flex-col items-center justify-center text-custom-slate-100">
              <span className="mb-1 text-1xs font-bold uppercase tracking-wider">
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
              <span className="mb-1 text-1xs font-bold uppercase tracking-wider">
                Score
              </span>
              <div className="h-1"></div>
              <ProgressRingLarge
                width={"100px"}
                progress={progress}
                radius={50}
                stroke={2}
                bottomColor={getScoreColor()}
                topColor={getScoreColor()}
              />
            </div>
          </div>
          {/* only display section list when filling out questionnaire */}
          {section_number ? (
            <div className=" rounded-b-2xl border border-slate-300 bg-custom-blue-200 p-5 text-xs text-custom-gray-400">
              <ul>
                {sections ? (
                  sections.sections.map((section, index) => (
                    <li key={index} className=" mb-3 w-50 last:mb-0">
                      {`${section.section_number
                        .split("_")
                        .join(".")
                        .toUpperCase()} ${section.title}`}
                    </li>
                  ))
                ) : (
                  <li></li>
                )}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default ProgressScoreCard;
