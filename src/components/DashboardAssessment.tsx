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

  const [open, setOpen] = useState(false);

  const entities = [
    {
      name: "Boldist",
    },
    {
      name: "Boldist",
    },
    {
      name: "Boldist",
    },
    {
      name: "Boldist",
    },
    {
      name: "Boldist",
    },
    {
      name: "Boldist",
    },
    {
      name: "Boldist",
    },
    {
      name: "Boldist",
    },
  ];

  if (!data) {
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
              {entities.map((entity, index) => (
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
        <div className="md:max-w-4.5xl 2xl:max-w-7xl mx-auto h-fit flex flex-col">
          <div className="flex w-full items-center">
            <h3 className="font-bold text-3xl">{entity?.data?.name}</h3>

            <button
              className="bg-custom-blue text-white hover:bg-custom-blue-400 px-5 py-3 rounded-full text-sm font-bold w-fit ml-auto"
              onClick={() => setOpen(true)}>
              Add New Assessment
            </button>
          </div>

          <div className="h-6"></div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {entities.map((entity, index) => (
              <Link key={index} href={`#`}>
                <a>
                  <DashboardAssessmentCard key={index} />
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
