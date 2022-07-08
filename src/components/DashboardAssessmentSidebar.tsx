import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import AssessIcon from "../icons/AssessIcon";
import ManageIcon from "../icons/ManageIcon";
import AuditIcon from "../icons/AuditIcon";
import InfoIcon from "../icons/InfoIcon";
import { SearchIcon } from "@heroicons/react/solid";
import ActiveLink from "./ActiveLink";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

interface SidebarProps {
  entity_id: string;
}

export default function DashboardAssessmentSidebar(props: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigation = [
    {
      name: "Assess",
      href: `/entity/${props.entity_id}`,
      icon: AssessIcon,
      disabled: false,
    },
    {
      name: "Manage",
      href: `/#`,
      icon: ManageIcon,
      disabled: true,
    },
    {
      name: "Audit",
      href: `/#`,
      icon: AuditIcon,
      disabled: true,
    },
    {
      name: "Entity Info",
      href: `/#`,
      icon: InfoIcon,
      disabled: false,
    },
  ];

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full">
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>

                  <div className="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav className="px-2 space-y-1">
                      {navigation.map((item, index) => (
                        <div key={index}>
                          <ActiveLink
                            key={item.name}
                            href={item.href}
                            activeClassName="bg-custom-slate-200 hover:text-custom-slate-900">
                            <a
                              className={classNames(
                                item.disabled
                                  ? "bg-gray-900 text-white  cursor-crosshair"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                              )}>
                              <item.icon
                                // className={classNames(
                                //   item.disabled
                                //     ? "text-gray-300"
                                //     : "text-gray-400 group-hover:text-gray-300",
                                //   "mr-4 flex-shrink-0 h-6 w-6"
                                // )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </ActiveLink>
                        </div>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-48 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pb-4 bg-white overflow-y-auto">
            <div className="h-16"></div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav
                className="flex-1 px-6 pt-3 bg-white space-y-3"
                aria-label="Sidebar">
                {navigation.map((item, index) => (
                  <div
                    key={index}
                    className={classNames(
                      item.disabled ? "  pointer-events-none" : ""
                    )}>
                    <ActiveLink
                      key={item.name}
                      href={item.href}
                      activeClassName="bg-custom-slate-200">
                      <a
                        className={classNames(
                          item.disabled
                            ? " text-slate-300 pointer-events-none"
                            : "text-custom-slate-900 hover:bg-custom-slate-200",
                          "group flex items-center px-4 py-3 text-base font-bold rounded-full"
                        )}>
                        <item.icon />
                        <span className="flex-1">{item.name}</span>
                      </a>
                    </ActiveLink>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
