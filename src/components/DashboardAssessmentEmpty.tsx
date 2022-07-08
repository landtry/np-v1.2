/* This example requires Tailwind CSS v2.0+ */
import { PlusIcon } from "@heroicons/react/solid";
import EntityIcon from "../icons/EntityIcon";

export default function DashbaordAssessmentEmpty() {
  return (
    <div className="text-center border-2 border-gray-300 border-dashed rounded-2xl w-fit m-auto py-6 px-10">
      <div className="flex justify-center">
        <div className="w-16 h-16">
          <EntityIcon src={""} />
        </div>
      </div>

      <h3 className="mt-2 text-lg font-bold text-gray-900">No Entities</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by adding a new entity.
      </p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-bold rounded-full text-white bg-custom-blue hover:bg-custom-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue">
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Add Entity
        </button>
      </div>
      <div className="h-3"></div>
    </div>
  );
}
