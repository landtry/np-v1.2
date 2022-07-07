import React from "react";

interface Props {
  name: string;
}

function DashboardHomeCard({ name }: Props) {
  return (
    <li className="col-span-1 flex flex-col text-center justify-center items-center bg-white rounded-2xl shadow-custom h-64">
      <h3 className="text-custom-slate-900 text-lg font-bold">{name}</h3>
    </li>
  );
}

export default DashboardHomeCard;
