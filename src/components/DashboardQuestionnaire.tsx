import React, { useState } from "react";
import DashboardHomeCard from "./DashboardHomeCard";
import { trpc } from "../utils/trpc";
import DashboardHomeCardLoader from "./DashboardHomeCardLoader";
import DashboardAssessmentModal from "./DashboardAssessmentModal";
import DashboardQuestionnaireSection from "./DashboardQuestionnaireSection";
import Link from "next/link";
import DashboardDetailsCard from "./DashboardDetailsCard";
import ISO_27001 from "../templates/iso_27001.json";

interface DashboardProps {
  entity_id: string;
  section_number: string;
  sub_section_number: string;
  iso_27001: object;
}

function DashboardQuestionnaire({
  entity_id,
  section_number,
  sub_section_number,
  iso_27001,
}: DashboardProps) {
  const { status, data } = trpc.useQuery(["auth.getSession"]);
  const [open, setOpen] = useState(false);

  const currentSection = ISO_27001.sections.filter(
    (section) => section.section_number === section_number
  )[0];

  if (!currentSection) {
    return <p>...Loading</p>;
  }

  return (
    <>
      <div className="mx-auto h-full w-full px-5">
        <div className="h-14"></div>
        <div className="h-18"></div>
        <div className="h-5"></div>
        <div className="h-0.5"></div>
        <div className="flex h-fit w-full flex-col">
          <ul role="list" className="">
            {currentSection.sections.map((section, index) => (
              <DashboardQuestionnaireSection
                key={index}
                section={section}
                sub_section_number={sub_section_number}
                iso_27001={iso_27001}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="h-8"></div>
    </>
  );
}

export default DashboardQuestionnaire;
