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

function DashboardAssessment({ assessment_id }: DashboardProps) {
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
      <div className="w-full mx-auto sm:mx-0 px-4 sm:px-6 lg:px-8 h-full">
        <div className="h-18"></div>
        <div className="h-8"></div>
        <div className="mx-auto h-fit flex flex-col">
          <div className="flex w-full items-center">
            <h3 className="font-bold text-3xl capitalize">
              {assessment?.data?.name}
            </h3>
          </div>

          <div className="h-6"></div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
            {ISO_27001.sections.map((section, index) => (
              <Link key={index} href={"#"}>
                <a>
                  <DashboardDetailsCard
                    key={index}
                    section_number={section.section_number}
                    title={section.title}
                    progress={assessment.data?.overall_progress}
                    score={assessment.data?.overall_score}
                  />
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {/* <DashboardAssessmentModal
        show={open}
        onClose={() => setOpen(false)}
        entity_id={entity_id}
      /> */}
      <div className="h-8"></div>
    </>
  );
}

export default DashboardAssessment;
