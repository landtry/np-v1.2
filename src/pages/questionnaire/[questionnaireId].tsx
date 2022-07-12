import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Error from "next/error";
import Router, { useRouter } from "next/router";
import DashboardDetailsSidebar from "../../components/DashboardDetailsSidebar";
import DashboardDetails from "../../components/DashboardDetails";
import { trpc } from "../../utils/trpc";
import ProgressScoreCard from "../../components/ProgressScoreCard";
import NavSecondary from "../../components/NavSecondary";
import DashboardQuestionnaire from "../../components/DashboardQuestionnaire";

const QuestionnairePage: NextPage = ({
  entity_id,
  assessment_id,
  section_number,
  sub_section_number,
}: any) => {
  const entity = trpc.useQuery(["entity.single-entity", { entity_id }]);

  const assessment = trpc.useQuery([
    "assessment.single-assessment",
    { assessment_id },
  ]);

  const user = trpc.useQuery([
    "user.single-user",
    { user_id: entity.data?.user_id ?? "" },
  ]);

  return (
    <>
      <NavSecondary
        assessmentName={assessment.data?.name ?? "Assessment"}
        userName={user.data?.name ?? "User"}
        entityName={entity.data?.name ?? "Entity"}
        assessmentStandard={
          assessment.data?.standard?.split("_").join(" ").toUpperCase() ??
          "Standard"
        }
      />
      <div className="flex h-full justify-between">
        <DashboardDetailsSidebar
          entity_id={entity_id}
          assessment_id={assessment_id}
        />
        <DashboardQuestionnaire
          entity_id={entity_id}
          assessment_id={assessment_id}
          section_number={section_number}
          sub_section_number={sub_section_number}
        />
        <ProgressScoreCard
          progress={assessment.data?.overall_score ?? 0}
          score={assessment.data?.overall_score ?? 0}
        />
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { questionnaireId } = context.params;
  const entity_id = questionnaireId.split("+")[0];
  const assessment_id = questionnaireId.split("+")[1];
  const section_number = questionnaireId.split("+")[2].split("-")[0];
  const sub_section_number = questionnaireId.split("+")[2].split("-")[1];
  return {
    props: {
      entity_id: entity_id,
      assessment_id: assessment_id,
      section_number: section_number,
      sub_section_number: sub_section_number,
    },
  };
}

export default QuestionnairePage;
