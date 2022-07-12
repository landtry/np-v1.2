import { PlusIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import DashboardQuestionnaireDocListItem from "./DashboardQuestionnaireDocListItem";

interface SubProps {
  subSection: {
    section_number: string;
    title: string;
    question: string;
  };
}

function DashboardQuestionnaireSubControl({ subSection }: any) {
  const possibleAnswers = [
    { id: "yes", title: "Yes" },
    { id: "no", title: "No" },
    { id: "partially", title: "Partially" },
    { id: "not_applicable", title: "Not Applicable" },
    { id: "idk", title: "I Don't Know" },
  ];
  return (
    <>
      <div className="h-4"></div>
      <div
        id={subSection.section_number}
        className="grid grid-cols-12 gap-4 border-b border-custom-slate-300 pb-4 last:border-b-0">
        {/* Form */}
        <form className="col-start-1 col-end-9 flex h-fit flex-col border-r border-custom-slate-300 pr-4 pb-1">
          <span className="text-xs capitalize text-custom-gray-400">{`${
            subSection.title
          } (${subSection.section_number
            .split("_")
            .join(".")
            .toUpperCase()})`}</span>
          <div className="h-2"></div>
          <span className="text-base font-bold">{subSection?.question}</span>
          <div className="h-4"></div>

          {/* Auditor answer, Auditor answer radios */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <label
                htmlFor="auditor_answer_description"
                className="block text-2xs font-bold text-custom-slate-900">
                Auditor Answer
              </label>
              <div className="mt-0.5">
                <textarea
                  rows={7}
                  name="auditor_answer_description"
                  id="auditor_answer_description"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-custom-blue focus:ring-custom-blue sm:text-sm"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="px-6">
              <fieldset className="mt-4">
                <legend className="sr-only">Possible Answers</legend>
                <div className="space-y-3">
                  {possibleAnswers.map((notificationMethod) => (
                    <div
                      key={notificationMethod.id}
                      className="flex items-center">
                      <input
                        id={notificationMethod.id}
                        name="auditor_answer"
                        type="radio"
                        className="h-3 w-3 border-custom-slate-900 text-custom-slate-900 focus:ring-custom-slate-900"
                      />
                      <label
                        htmlFor={notificationMethod.id}
                        className="ml-3 block text-sm font-medium text-gray-700">
                        {notificationMethod.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
          <div className="h-5"></div>

          {/* Internal Comments, Notes to Client */}
          <div className="flex items-start justify-between gap-5">
            <div className="flex-1">
              <label
                htmlFor="auditor_answer_description"
                className="block text-2xs font-bold text-custom-slate-900">
                Internal Comments
              </label>
              <div className="mt-0.5">
                <textarea
                  rows={7}
                  name="auditor_answer_description"
                  id="auditor_answer_description"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-custom-blue focus:ring-custom-blue sm:text-sm"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="flex-1">
              <label
                htmlFor="auditor_answer_description"
                className="block text-2xs font-bold text-custom-slate-900">
                Notes to Client
              </label>
              <div className="mt-0.5">
                <textarea
                  rows={7}
                  name="auditor_answer_description"
                  id="auditor_answer_description"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-custom-blue focus:ring-custom-blue  sm:text-sm"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="h-5"></div>

          {/* SME, Status*/}
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <label
                htmlFor="location"
                className="block text-xs font-bold text-custom-slate-900">
                SME
              </label>
              <select
                id="standard"
                className=" mt-1 block w-full rounded-md border-gray-300 py-2.5 font-bold text-custom-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                defaultValue="iso_27001"
                value={"iso_27001"}
                placeholder="Select an SME">
                <option>Select an SME</option>
                <option>SME 1</option>
              </select>
              <input
                type="text"
                id="entity_id"
                className="hidden"
                value={"entity_id"}
                placeholder=""
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="location"
                className="block text-xs font-bold text-custom-slate-900">
                Status
              </label>
              <select
                id="standard"
                className=" mt-1 block w-full rounded-md border-gray-300 p-2.5 font-bold text-custom-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                defaultValue="in_progress"
                value={"iso_27001"}>
                <option>In Progress</option>
                <option>Complete</option>
              </select>
              <input
                type="text"
                id="entity_id"
                className="hidden"
                value={"entity_id"}
                placeholder=""
              />
            </div>
          </div>
          <div className="h-6"></div>
        </form>

        {/* Documents, Changelog */}
        <div className="col-start-9 col-end-13">
          <div className="flex w-full flex-col">
            <span className="w-full border-b border-custom-slate-300 pb-1 text-2xs font-bold text-custom-slate-900">
              Documents
            </span>
            <div className="h-2"></div>
            <ul>
              <DashboardQuestionnaireDocListItem />
              <DashboardQuestionnaireDocListItem />
            </ul>
            <div className="h-2"></div>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent text-xs font-bold hover:text-slate-500 leading-4 text-custom-gray-400">
              <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Add New Document
            </button>
          </div>
          <div className="w-full border-b border-custom-slate-300 pb-1 text-2xs font-bold text-custom-slate-900">
            <span>Changelog</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardQuestionnaireSubControl;
