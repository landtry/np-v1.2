import { PlusIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useForm } from "react-hook-form";
import { CreateEntityInput } from "../schema/entity.schema";
import { trpc } from "../utils/trpc";
import DashboardQuestionnaireDocListItem from "./DashboardQuestionnaireDocListItem";

interface SubProps {
  subSection: {
    section_number: string;
    title: string;
    question: string;
  };
  iso_27001: object;
}

function DashboardQuestionnaireSubControl({ subSection, iso_27001 }: any) {
  const { mutate, error } = trpc.useMutation(["iso_27001.update-assessment"], {
    onSuccess({ id }) {
      console.log("success " + id);
    },
  });

  const { handleSubmit, register } = useForm<CreateEntityInput>();

  const onSubmit = (values: CreateEntityInput) => {
    if (!iso_27001) {
      return;
    }
    mutate({ id: iso_27001.id, ...values });
  };

  const [inputValues, setInputValues] = useState({
    ...iso_27001,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
    mutate({ id: iso_27001.id, [name]: value });
  };

  const possibleAnswers = [
    { id: "yes", title: "Yes" },
    { id: "no", title: "No" },
    { id: "partially", title: "Partially" },
    { id: "not_applicable", title: "Not Applicable" },
    { id: "idk", title: "I Don't Know" },
  ];

  console.log(subSection.section_number);

  return (
    <>
      <div className="h-4"></div>
      <div
        id={subSection.section_number}
        className="grid grid-cols-12 gap-4 border-b border-custom-slate-300 pb-4 last:border-b-0">
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col-start-1 col-end-9 flex h-fit flex-col border-r border-custom-slate-300 pr-4 pb-1">
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
            {/* Auditor answer description */}
            <div className="flex-1">
              <label
                htmlFor={`${subSection.section_number}_auditor_answer_description`}
                className="block text-2xs font-bold text-custom-slate-900">
                Auditor Answer
              </label>
              <div className="mt-0.5">
                <DebounceInput
                  element="textarea"
                  debounceTimeout={3000}
                  id={`${subSection.section_number}_auditor_answer_description`}
                  name={`${subSection.section_number}_auditor_answer_description`}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-custom-blue focus:ring-custom-blue sm:text-sm"
                  rows={7}
                  value={
                    inputValues[
                      `${subSection.section_number}_auditor_answer_description`
                    ] ?? ""
                  }
                  onChange={handleInputChange}></DebounceInput>
              </div>
            </div>

            {/* Auditor answer */}
            <div className="px-6">
              <fieldset className="mt-4">
                <legend className="sr-only">Possible Answers</legend>
                <div className="space-y-3">
                  {possibleAnswers.map((answer) => (
                    <div
                      key={`${subSection.section_number}_${answer.id}`}
                      className="flex items-center">
                      <input
                        id={`${subSection.section_number}_${answer.id}`}
                        name={`${subSection.section_number}_auditor_answer`}
                        type="radio"
                        className="h-3 w-3 border-custom-slate-900 text-custom-slate-900 focus:ring-custom-slate-900"
                        value={answer.title}
                        checked={
                          inputValues[
                            `${subSection.section_number}_auditor_answer`
                          ] === answer.title
                            ? true
                            : false
                        }
                        onChange={handleInputChange}
                      />
                      <label
                        htmlFor={`${subSection.section_number}_${answer.id}`}
                        className="ml-3 block text-sm font-medium text-gray-700">
                        {answer.title}
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
            {/* internal comments */}
            <div className="flex-1">
              <label
                htmlFor={`${subSection.section_number}_internal_comments`}
                className="block text-2xs font-bold text-custom-slate-900">
                Internal Comments
              </label>
              <div className="mt-0.5">
                <DebounceInput
                  element="textarea"
                  debounceTimeout={3000}
                  id={`${subSection.section_number}_internal_comments`}
                  name={`${subSection.section_number}_internal_comments`}
                  rows={7}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-custom-blue focus:ring-custom-blue sm:text-sm"
                  value={
                    inputValues[
                      `${subSection.section_number}_internal_comments`
                    ] ?? ""
                  }
                  onChange={handleInputChange}></DebounceInput>
              </div>
            </div>
            {/* notes to client */}
            <div className="flex-1">
              <label
                htmlFor={`${subSection.section_number}_notes_to_client`}
                className="block text-2xs font-bold text-custom-slate-900">
                Notes to Client
              </label>
              <div className="mt-0.5">
                <DebounceInput
                  element="textarea"
                  debounceTimeout={3000}
                  id={`${subSection.section_number}_notes_to_client`}
                  name={`${subSection.section_number}_notes_to_client`}
                  rows={7}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-custom-blue focus:ring-custom-blue  sm:text-sm"
                  value={
                    inputValues[
                      `${subSection.section_number}_notes_to_client`
                    ] ?? ""
                  }
                  onChange={handleInputChange}></DebounceInput>
              </div>
            </div>
          </div>
          <div className="h-5"></div>

          {/* SME, Status*/}
          <div className="flex items-center justify-between gap-4">
            {/* sme */}
            <div className="flex-1">
              <label
                htmlFor={`${subSection.section_number}_sme`}
                className="block text-xs font-bold text-custom-slate-900">
                SME
              </label>
              <select
                id={`${subSection.section_number}_sme`}
                name={`${subSection.section_number}_sme`}
                className="mt-1 block w-full rounded-md border-gray-300 py-2.5 font-bold text-custom-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                value={
                  inputValues[`${subSection.section_number}_sme`] ??
                  "Select an SME"
                }
                onChange={handleInputChange}>
                <option value="Select an SME">Select an SME</option>
                <option value="SME 1">SME 1</option>
              </select>
            </div>
            {/* status */}
            <div className="flex-1">
              <label
                htmlFor={`${subSection.section_number}_status`}
                className="block text-xs font-bold text-custom-slate-900">
                Status
              </label>
              <select
                id={`${subSection.section_number}_status`}
                name={`${subSection.section_number}_status`}
                className=" mt-1 block w-full rounded-md border-gray-300 p-2.5 font-bold text-custom-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xs"
                value={
                  inputValues[`${subSection.section_number}_status`] ??
                  "In Progress"
                }
                onChange={handleInputChange}>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
          </div>
          <div className="h-6"></div>
        </form>

        {/* Documents, Changelog */}
        <div className="col-start-9 col-end-13">
          {/* documents */}
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
              className="inline-flex items-center rounded-md border border-transparent text-xs font-bold leading-4 text-custom-gray-400 hover:text-slate-500">
              <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Add New Document
            </button>
          </div>

          <div className="h-7"></div>

          {/* changelog */}
          <div className="flex w-full flex-col">
            <span className="w-full border-b border-custom-slate-300 pb-1 text-2xs font-bold text-custom-slate-900">
              Changelog
            </span>
            <ul>
              <li className="border-b-2 border-dotted border-slate-300 py-3 text-xs text-custom-gray-400 last:border-0">
                <strong>User Name</strong> made and update on{" "}
                <strong>00/00/00</strong> at <strong>12:30pm</strong>
              </li>
              <li className="border-b-2 border-dotted border-slate-300 py-3 text-xs text-custom-gray-400 last:border-0">
                <strong>User Name</strong> made and update on{" "}
                <strong>00/00/00</strong> at <strong>12:30pm</strong>
              </li>
              <li className="border-b-2 border-dotted border-slate-300 py-3 text-xs text-custom-gray-400 last:border-0">
                <strong>User Name</strong> made and update on{" "}
                <strong>00/00/00</strong> at <strong>12:30pm</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardQuestionnaireSubControl;
