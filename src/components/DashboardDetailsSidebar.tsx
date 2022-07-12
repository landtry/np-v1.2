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
      <div className=" min-h-screen">
        {/* Static sidebar for desktop */}
        <div
          className={classNames(
            sidebarOpen ? "w-46" : "w-16",
            "relative hidden md:inset-y-0 md:flex md:flex-col"
          )}>
          <div className="  fixed z-20 flex h-full flex-grow flex-col border-r border-gray-200 bg-white pt-34">
            <div className=" flex flex-grow  flex-col overflow-y-auto">
              <div
                className={
                  "flex items-center justify-center gap-2 border-b border-custom-slate-200 py-3 px-2 text-xs font-bold text-custom-slate-900"
                }>
                <Link
                  href={`/assessment/${props.entity_id}+${props.assessment_id}`}>
                  <a className=" mr-1 hover:opacity-90">
                    <HomeIcon />
                  </a>
                </Link>

                <span className={classNames(sidebarOpen ? "block" : "hidden")}>
                  Assessment Home
                </span>

                <button
                  className={classNames(
                    sidebarOpen ? "rotate-0" : "rotate-180",
                    " inline-flex items-center rounded border border-transparent p-1 text-white transition-transform duration-300 hover:bg-slate-200  hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  )}
                  onClick={() => setSidebarOpen(!sidebarOpen)}>
                  <CollapseArrowIcon />
                </button>
              </div>
              <nav
                className={classNames(
                  sidebarOpen ? "w-46" : "w-16",
                  "overlay flex-1 bg-white"
                )}
                aria-label="Sidebar">
                {ISO_27001.sections.map((section, index) => (
                  <div
                    key={index}
                    className={classNames(
                      sidebarOpen ? "block" : "hidden",
                      " border-b border-b-custom-slate-200"
                    )}>
                    <Link
                      href={`/questionnaire/${props.entity_id}+${props.assessment_id}+${section.section_number}-${section.section_number}_1`}>
                      <div className=" cursor-pointer px-5 py-2 pt-3 text-3xs font-bold uppercase leading-tight tracking-wider text-custom-blue hover:bg-slate-100">
                        <a>
                          {`${section.section_number.split("_").join(".")} ${
                            section.title
                          }`}
                        </a>
                      </div>
                    </Link>

                    <div className="">
                      {section.sections.map((subSection, index) => {
                        return (
                          <ActiveLink
                            key={index}
                            activeClassName="font-bold"
                            href={`/questionnaire/${props.entity_id}+${props.assessment_id}+${section.section_number}-${subSection.section_number}`}>
                            <div className="  cursor-pointer px-5 py-2 pr-4 text-xs capitalize text-custom-slate-900 last:pb-3 hover:bg-slate-100">
                              <a>
                                {`${subSection.section_number
                                  .split("_")
                                  .join(".")} ${subSection.title}`}
                              </a>
                            </div>
                          </ActiveLink>
                        );
                      })}
                    </div>
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
