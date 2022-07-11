import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
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
import ISO_27001 from "../templates/iso_27001.json";
import HomeIcon from "../icons/HomeIcon";
import CollapseArrowIcon from "../icons/CollapseArrowIcon";
import Link from "next/link";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

interface SidebarProps {
  entity_id: string;
  assessment_id: string;
}

export default function DashboardDetailsSidebar(props: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div>
        {/* Static sidebar for desktop */}
        <div className="h-3"></div>
        <div className="h-12"></div>
        <div className="h-16 lg:h-18"></div>
        <div
          className={classNames(
            sidebarOpen ? "w-46" : "w-16",
            "hidden relative md:flex md:flex-col md:inset-y-0 h-full"
          )}>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex max-w-full flex-col w-auto flex-grow border-r border-gray-200 pb-4 bg-white overflow-y-auto fixed z-20 h-full">
            <div className="flex-grow flex flex-col ">
              <nav
                className={classNames(
                  sidebarOpen ? "w-46" : "w-16",
                  "flex-1 bg-white"
                )}
                aria-label="Sidebar">
                <div className="flex items-center justify-between font-bold text-custom-slate-900 py-3 px-2 pl-3 text-xs border-b border-custom-slate-200">
                  <Link
                    href={`/assessment/${props.entity_id}+${props.assessment_id}`}>
                    <a>
                      <HomeIcon />
                    </a>
                  </Link>

                  <span
                    className={classNames(sidebarOpen ? "block" : "hidden")}>
                    Assessment Home
                  </span>

                  <button
                    className={classNames(
                      sidebarOpen ? "rotate-0" : "rotate-180",
                      " transition-transform duration-0200 inline-flex items-center p-1 border border-transparent rounded hover:shadow-sm text-white  hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                    onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <CollapseArrowIcon />
                  </button>
                </div>

                {ISO_27001.sections.map((section, index) => (
                  <div
                    key={index}
                    className={classNames(
                      sidebarOpen ? "block" : "hidden",
                      "border-b border-b-custom-slate-200"
                    )}>
                    <div className="text-custom-blue uppercase text-3xs font-bold tracking-wider leading-tight hover:bg-slate-100 px-5 py-2 pt-3">
                      <Link
                        href={`/details/${props.assessment_id}/${section.section_number}`}>
                        <a>
                          {`${section.section_number.split("_").join(".")} ${
                            section.title
                          }`}
                        </a>
                      </Link>
                    </div>

                    <div className="">
                      {section.sections.map((subSection, index) => {
                        return (
                          <div
                            className="text-custom-slate-900 text-xs capitalize hover:bg-slate-100  px-5 py-2 last:pb-3"
                            key={index}>
                            <ActiveLink
                              activeClassName="font-bold"
                              href={`/details/${props.assessment_id}/${subSection.section_number}`}>
                              <a>
                                {`${subSection.section_number
                                  .split("_")
                                  .join(".")} ${subSection.title}`}
                              </a>
                            </ActiveLink>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div className="h-3"></div>
                <div className="h-12"></div>
                <div className="h-16 lg:h-18"></div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
