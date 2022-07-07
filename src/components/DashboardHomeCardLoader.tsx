import React from "react";

function DashboardHomeCardLoader() {
  return (
    <div className="border border-slate-300 bg-custom-slate-100 shadow-custom rounded-2xl p-4 max-w-sm w-full mx-auto h-64">
      <div className="animate-pulse h-full">
        <div className="flex flex-col justify-between py-1 h-full">
          <div className="h-2 bg-slate-300 rounded"></div>
          <div className="flex items-center justify-center w-full">
            <div className="rounded-full bg-slate-300 h-18 w-18"></div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <div className="h-2 bg-slate-300 rounded col-span-6"></div>
            <div className="h-2 bg-slate-300 rounded col-start-3 col-end-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHomeCardLoader;
