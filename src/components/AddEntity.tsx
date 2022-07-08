import { ExclamationCircleIcon } from "@heroicons/react/outline";
import Router from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { CreateEntityInput } from "../schema/entity.schema";
import { trpc } from "../utils/trpc";

function AddEntity() {
  const { mutate, error } = trpc.useMutation(["entity.create-entity"], {
    onSuccess({ id }) {
      Router.push(`/entity/${id}`);
      console.log("success " + id);
    },
  });

  if (error) {
    console.log(error.message);
  }

  const { handleSubmit, register } = useForm<CreateEntityInput>();

  const onSubmit = (values: CreateEntityInput) => {
    mutate(values);
  };

  return (
    <>
      <div className="h-8"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4.5xl mx-auto h-40">
          <h1 className="font-bold text-3xl text-custom-slate-900">
            Add Entity
          </h1>
          <div className="h-5"></div>
          <form
            className="grid grid-cols-12 gap-6"
            onSubmit={handleSubmit(onSubmit)}>
            {/* Left Column */}
            <div className="col-start-1 col-end-6 flex flex-col gap-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    {...register("name")}
                    id="name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder=""
                  />
                </div>
              </div>

              {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="flex items-center">
                    <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <button
                      type="button"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Change
                    </button>
                  </div>
                </div>
              </div> */}

              {/* <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                  />
                </div>
              </div> */}
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-custom-blue hover:bg-custom-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue">
                Create Entity
              </button>
            </div>

            {/* divider */}
            <div className="col-start-6 col-end-7 flex justify-center">
              <div className="w-0.5 h-full bg-custom-slate-300"></div>
            </div>

            {/* Right Column */}
            {/* <div className="col-start-7 col-end-13 flex flex-col gap-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </div> */}
            <div className="col-start-7 col-end-12"></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddEntity;
