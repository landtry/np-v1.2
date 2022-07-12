import { XIcon } from "@heroicons/react/solid";
import React from "react";
import FileIcon from "../icons/FileIcon";
import MyEditIcon from "../icons/MyEditIcon";

function DashboardQuestionnaireDocListItem() {
  return (
    <li className="flex items-center border-b-2 border-dotted border-slate-300 py-1 last:border-0">
      <div className="mr-3">
        <FileIcon />
      </div>
      <span className="text-xs text-custom-slate-900">Document-Title.doc</span>
      <button className="ml-auto inline-flex items-center rounded-md border border-transparent p-1.5 text-xs font-bold leading-4 text-custom-gray-400 hover:bg-slate-200  focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2">
        <MyEditIcon />
      </button>
      <button className="inline-flex items-center rounded-md border border-transparent p-1 text-xs font-bold leading-4 text-custom-gray-400 hover:bg-slate-200  focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2">
        <XIcon className="h-4 w-4" />
      </button>
    </li>
  );
}

export default DashboardQuestionnaireDocListItem;
