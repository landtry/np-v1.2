import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Error from "next/error";
import Router, { useRouter } from "next/router";
import DashboardDetailsSidebar from "../../components/DashboardDetailsSidebar";
import DashboardDetails from "../../components/DashboardDetails";
import { trpc } from "../../utils/trpc";
import ProgressScoreCard from "../../components/ProgressScoreCard";
import NavSecondary from "../../components/NavSecondary";

const AssessmentPage: NextPage = ({ entity_id, assessment_id }: any) => {
  const entity = trpc.useQuery(["entity.single-entity", { entity_id }]);

  const assessment = trpc.useQuery([
    "assessment.single-assessment",
    { assessment_id },
  ]);

  const user = trpc.useQuery([
    "user.single-user",
    { user_id: entity.data?.user_id ?? "" },
  ]);

  // const { data, isLoading, error } = trpc.useQuery([
  //   "assessment.details",
  //   { assessment_id },
  // ]);

  // if (isLoading) {
  //   return <p>Loading Assessment...</p>;
  // }

  // if (!data) {
  //   return <Error statusCode={404} />;
  // }

  // if (error) {
  //   Router.push("/");
  // }

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
        <DashboardDetails entity_id={entity_id} assessment_id={assessment_id} />
        <ProgressScoreCard
          progress={assessment.data?.overall_score ?? 0}
          score={assessment.data?.overall_score ?? 0}
        />
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { assessmentId } = context.params;
  const entity_id = assessmentId.split("+")[0];
  const assessment_id = assessmentId.split("+")[1];
  return {
    props: {
      entity_id: entity_id,
      assessment_id: assessment_id,
    },
  };
}

export default AssessmentPage;
