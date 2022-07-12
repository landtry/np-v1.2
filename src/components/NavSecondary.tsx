import React from "react";
import SettingsIcon from "../icons/SettingsIcon";
import { trpc } from "../utils/trpc";

interface NavProps {
  userName: string;
  entityName: string;
  assessmentName: string;
  assessmentStandard: string;
}

function NavSecondary({
  assessmentName,
  assessmentStandard,
  entityName,
  userName,
}: NavProps) {
  return (
    <div className="bg-custom-slate-100 w-screen fixed top-0 z-30 border border-custom-slate-300 flex flex-col justify-between">
      <div className="h-18"></div>
      <div className="flex items-center py-2 px-3">
        <div className="mr-3 p-2 hover:bg-custom-slate-200 rounded-xl group cursor-pointer">
          <SettingsIcon click={() => ""} />
        </div>
        <div className="font-bold flex flex-col mr-auto">
          <span className="text-xs text-custom-gray-400  tracking-wide">
            {entityName}
          </span>
          <span className="text-xl">{assessmentName}</span>
        </div>
        <div className="font-bold flex flex-col ml-auto mr-18">
          <span className="text-xs text-custom-gray-400  tracking-wide">
            Standard
          </span>
          <span className="text-xl">{assessmentStandard}</span>
        </div>
        <div className="font-bold flex flex-col mr-18">
          <span className="text-xs text-custom-gray-400  tracking-wide ">
            Consultant
          </span>
          <span className="text-xl capitalize">{userName}</span>
        </div>
      </div>
    </div>
  );
}

export default NavSecondary;
