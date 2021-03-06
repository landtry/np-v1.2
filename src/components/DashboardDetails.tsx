import React, { useState } from "react";
import DashboardHomeCard from "./DashboardHomeCard";
import { trpc } from "../utils/trpc";
import DashboardHomeCardLoader from "./DashboardHomeCardLoader";
import DashboardAssessmentModal from "./DashboardAssessmentModal";
import Link from "next/link";
import DashboardDetailsCard from "./DashboardDetailsCard";
import ISO_27001 from "../templates/iso_27001.json";

interface DashboardProps {
  entity_id: string;
  assessment_id: string;
}

function DashboardDetails({ assessment_id, entity_id }: DashboardProps) {
  const { status, data } = trpc.useQuery(["auth.getSession"]);
  const [open, setOpen] = useState(false);

  const assessment = trpc.useQuery([
    "assessment.single-assessment",
    { assessment_id: assessment_id },
  ]);

  // if (!data || !details) {
  //   return (
  //     <>
  //       <div className="h-18"></div>
  //       <div className="h-8"></div>
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
  //         <div className="max-w-4.5xl  mx-auto h-fit flex flex-col">
  //           <div className="h-16"></div>
  //           <ul
  //             role="list"
  //             className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  //             {details.map((assessment, index) => (
  //               <DashboardHomeCardLoader key={index} />
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="h-8"></div>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="mx-auto h-full w-full px-4 sm:mx-0 sm:px-6 lg:px-8">
        <div className="h-14"></div>
        <div className="h-18"></div>
        <div className="h-8"></div>
        <div className="mx-auto flex h-fit flex-col">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
            {ISO_27001.sections.map((section, index) => (
              <Link
                key={index}
                href={`/questionnaire/${entity_id}+${assessment_id}+${section.section_number}-${section.section_number}_1`}>
                <a>
                  <DashboardDetailsCard
                    key={index}
                    section_number={section.section_number}
                    title={section.title}
                    progress={assessment.data?.overall_progress}
                    score={assessment.data?.overall_score}
                    updated={assessment.data?.last_updated.toString()}
                  />
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div className="h-8"></div>
      </div>
    </>
  );
}

export default DashboardDetails;
