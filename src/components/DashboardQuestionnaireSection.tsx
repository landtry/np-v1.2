import React, { useEffect } from "react";
import DashboardQuestionnaireSubControl from "./DashboardQuestionnaireSubControl";

interface SectionProps {
  section: {
    section_number: string;
    title: string;
    sub_sections: Array<object>;
  };
  sub_section_number: string;
}

function DashboardQuestionnaireSection({
  section,
  sub_section_number,
}: SectionProps) {
  useEffect(() => {
    if (sub_section_number) {
      const element = document.querySelector(`#${sub_section_number}`);
      if (!element) return;
      const y = element.getBoundingClientRect().top + window.pageYOffset - 168;
      window.scrollTo({ top: y });
    }
  }, [sub_section_number]);

  return (
    <li className="w-full" id={section.section_number}>
      <h6
        className="w-full border-b border-custom-slate-300 pb-0.5 text-2xs font-bold uppercase tracking-wider text-custom-blue"
        id={`h5_${section.section_number}`}>{`${section.section_number
        .split("_")
        .join(".")
        .toUpperCase()} ${section.title}`}</h6>
      {section.sub_sections.map((subSection, index) => {
        return (
          <DashboardQuestionnaireSubControl
            key={index}
            subSection={subSection}
          />
        );
      })}
    </li>
  );
}

export default DashboardQuestionnaireSection;
