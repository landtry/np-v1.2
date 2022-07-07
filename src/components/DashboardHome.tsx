import React from "react";
import DashboardHomeCard from "./DashboardHomeCard";
import { trpc } from "../utils/trpc";
import DashboardHomeCardLoader from "./DashboardHomeCardLoader";

function DashboardHome() {
  // const { status, data } = trpc.useQuery(["auth.getSession"]);
  // const users = trpc.useQuery(["example.getAllUsers"]);
  // console.log(users.data);
  // const data = null;

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

  // if (!data) {
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
  //             {entities.map((entity, index) => (
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
      <div className="h-18"></div>
      <div className="h-8"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="max-w-4.5xl  mx-auto h-fit flex flex-col">
          <button className="bg-custom-blue text-white hover:bg-custom-blue-400 px-5 py-3 rounded-full text-sm font-bold w-fit ml-auto">
            Add Entity
          </button>
          <div className="h-6"></div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {entities.map((entity, index) => (
              <DashboardHomeCard key={index} name={entity.name} />
            ))}
          </ul>
        </div>
      </div>
      <div className="h-8"></div>
    </>
  );
}

export default DashboardHome;
