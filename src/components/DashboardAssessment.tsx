import React, { useState } from "react";
import DashboardHomeCard from "./DashboardHomeCard";
import { trpc } from "../utils/trpc";
import DashboardHomeCardLoader from "./DashboardHomeCardLoader";
import DashboardAssessmentModal from "./DashboardAssessmentModal";
import Link from "next/link";
import DashboardAssessmentCard from "./DashboardAssessmentCard";

interface DashboardProps {
  entity_id: string;
}

function DashboardAssessment({ entity_id }: DashboardProps) {
  const { status, data } = trpc.useQuery(["auth.getSession"]);
  const entity = trpc.useQuery([
    "entity.single-entity",
    {
      entity_id,
    },
  ]);

  const assessments = trpc.useQuery([
    "assessment.assessments",
    {
      entity_id,
    },
  ]);

  console.log(assessments);

  const [open, setOpen] = useState(false);

  if (!data || !assessments) {
    return (
      <>
        <div className="h-18"></div>
        <div className="h-8"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="max-w-4.5xl  mx-auto h-fit flex flex-col">
            <div className="h-16"></div>
            <ul
              role="list"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {assessments?.data?.map((assessment, index) => (
                <DashboardHomeCardLoader key={index} />
              ))}
            </ul>
          </div>
        </div>
        <div className="h-8"></div>
      </>
    );
  }

  return (
    <>
      <div className="h-18"></div>
      <div className="h-8"></div>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-full md:ml-48">
        <div className="mx-auto h-fit w-full flex flex-col">
          <div className="flex w-full items-center">
            <h3 className="font-bold text-3xl capitalize">
              {entity?.data?.name}
            </h3>

            <button
              className="bg-custom-blue text-white hover:bg-custom-blue-400 px-5 py-3 rounded-full text-sm font-bold w-fit ml-auto"
              onClick={() => setOpen(true)}>
              Add New Assessment
            </button>
          </div>

          <div className="h-6"></div>
          <ul
            role="list"
            className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
            {assessments?.data?.map((assessment, index) => (
              <Link
                key={index}
                href={`../assessment/${entity_id + "+" + assessment.id}`}>
                <a>
                  <DashboardAssessmentCard
                    key={index}
                    name={assessment.name}
                    standard={assessment.standard}
                    overall_progress={assessment.overall_progress}
                    overall_score={assessment.overall_score}
                    last_updated={assessment.last_updated}
                  />
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <DashboardAssessmentModal
        show={open}
        onClose={() => setOpen(false)}
        entity_id={entity_id}
      />
      <div className="h-8"></div>
    </>
  );
}

export default DashboardAssessment;
