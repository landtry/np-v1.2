import React from "react";
import DashboardHomeCard from "./DashboardHomeCard";
import { trpc } from "../utils/trpc";
import DashboardHomeCardLoader from "./DashboardHomeCardLoader";
import DashboardHomeEmpty from "./DashboardHomeEmpty";
import Link from "next/link";

function DashboardHome() {
  const session = trpc.useQuery(["auth.getSession"]);

  const entities = trpc.useQuery(["entity.entities"]);

  const loaderCards = ["1", "2", "3", "4", "5", "6", "7", "8"];

  if (!session.data || entities.status === "loading") {
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
      <div className="flex h-screen w-full items-center justify-center">
        <DashboardHomeEmpty />
      </div>
    );
  }

  return (
    <>
      <div className="h-18"></div>
      <div className="h-8"></div>
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto  flex h-fit max-w-4.5xl flex-col">
          <Link href="/addEntity">
            <button className="ml-auto w-fit rounded-full bg-custom-blue px-5 py-3 text-sm font-bold text-white hover:bg-custom-blue-400 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2">
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
