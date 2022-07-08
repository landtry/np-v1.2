/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { CreateAssessmentInput } from "../schema/assessment.schema";
import Router from "next/router";
import { trpc } from "../utils/trpc";

interface ModalProps {
  show: Boolean;
  onClose: Function;
  entity_id: string;
}

export default function Example({ show, onClose, entity_id }: ModalProps) {
  const { mutate, error } = trpc.useMutation(["assessment.create-assessment"], {
    onSuccess({ id }) {
      Router.push(`/assessment/${entity_id + "+" + id}`);
      console.log("success " + id);
    },
  });

  if (error) {
    console.log(error.message);
  }

  const { handleSubmit, register } = useForm<CreateAssessmentInput>();

  const onSubmit = (values: CreateAssessmentInput) => {
    mutate(values);
  };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (show) {
      setOpen(true);
    }
  }, [show]);

  useEffect(() => {
    if (!open) {
      onClose();
    }
  }, [open]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-slate-900 bg-opacity-60 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative bg-white rounded-2xl px-8 pt-7 pb-4 w-80 max-w-full text-left overflow-hidden shadow-custom transform transition-all sm:my-8 sm:max-w-xl sm:w-full sm:px-18 sm:py-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <div className="text-center">
                      <Dialog.Title
                        as="h3"
                        className="text-xl leading-6 font-bold text-slate-900">
                        Add New Assessment
                      </Dialog.Title>
                    </div>

                    <div>
                      <label
                        htmlFor="title"
                        className="block text-xs font-bold text-custom-slate-900">
                        Title
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
                      <div className="h-4"></div>
                      <div>
                        <label
                          htmlFor="location"
                          className="block text-xs font-bold text-custom-slate-900">
                          Template
                        </label>
                        <select
                          id="standard"
                          {...register("standard")}
                          className=" mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          defaultValue="iso_27001"
                          value={"iso_27001"}>
                          <option>iso_27001</option>
                        </select>
                        <input
                          type="text"
                          {...register("entity_id")}
                          id="entity_id"
                          className="hidden"
                          value={entity_id}
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 flex-col flex sm:flex-row w-full justify-center items-center sm:gap-8">
                    <button
                      type="submit"
                      className="inline-flex justify-center w-full rounded-full border border-transparent shadow-sm px-4 py-2 bg-custom-blue text-base font-medium text-white hover:bg-custom-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue">
                      Create Assessment
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center w-fit mt-4 rounded-full border border-transparent shadow-sm px-4 py-2  text-base font-medium sm:mt-0 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      onClick={() => setOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
