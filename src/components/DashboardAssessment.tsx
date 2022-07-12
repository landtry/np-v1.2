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

  const [open, setOpen] = useState(false);

  if (!data || !assessments) {
    return (
      <>
        <div className="h-18"></div>
        <div className="h-8"></div>
        <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto  flex h-fit max-w-4.5xl flex-col">
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
      <div className="mx-auto h-full max-w-full px-4 sm:px-6 md:ml-48 lg:px-8">
        <div className="mx-auto flex h-fit w-full flex-col">
          <div className="flex w-full items-center">
            <h3 className="text-3xl font-bold capitalize">
              {entity?.data?.name}
            </h3>

            <button
              className="ml-auto w-fit rounded-full bg-custom-blue px-5 py-3 text-sm font-bold text-white hover:bg-custom-blue-400 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2"
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
                    name={assessment.name ?? "name"}
                    standard={assessment.standard ?? "standard"}
                    overall_progress={assessment.overall_progress ?? 0}
                    overall_score={assessment.overall_score ?? 0}
                    last_updated={assessment.last_updated.toString() ?? "..."}
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
