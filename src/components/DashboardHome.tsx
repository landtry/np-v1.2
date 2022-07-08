import React from "react";
import DashboardHomeCard from "./DashboardHomeCard";
import { trpc } from "../utils/trpc";
import DashboardHomeCardLoader from "./DashboardHomeCardLoader";
import DashboardHomeEmpty from "./DashboardHomeEmpty";
import Link from "next/link";

function DashboardHome() {
  const session = trpc.useQuery(["auth.getSession"]);

  const entities = trpc.useQuery(["entity.entities"]);

  console.log(entities);

  const loaderCards = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const entitiesFake = [
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

  if (!session.data || entities.status === "loading") {
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
              {loaderCards.map((entity, index) => (
                <DashboardHomeCardLoader key={index} />
              ))}
            </ul>
          </div>
        </div>
        <div className="h-8"></div>
      </>
    );
  }

  if (entities?.data?.length === 0) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <DashboardHomeEmpty />
      </div>
    );
  }

  return (
    <>
      <div className="h-18"></div>
      <div className="h-8"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="max-w-4.5xl  mx-auto h-fit flex flex-col">
          <Link href="/addEntity">
            <button className="bg-custom-blue text-white hover:bg-custom-blue-400 px-5 py-3 rounded-full text-sm font-bold w-fit ml-auto">
              Add Entity
            </button>
          </Link>
          <div className="h-6"></div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {entities.data?.map((entity, index) => (
              <Link key={index} href={`/entity/${entity.id}`}>
                <a>
                  <DashboardHomeCard name={entity.name} overall_progress={0} />
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-8"></div>
    </>
  );
}

export default DashboardHome;
