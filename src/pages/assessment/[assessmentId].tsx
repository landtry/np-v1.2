import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Error from "next/error";
import Router, { useRouter } from "next/router";
import DashboardAssessmentSidebar from "../../components/DashboardAssessmentSidebar";
import DashboardAssessment from "../../components/DashboardAssessment";
import { trpc } from "../../utils/trpc";

const EntityPage: NextPage = ({ entity_id }: any) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      Router.push("/login");
    },
  });

  const { data, isLoading, error } = trpc.useQuery([
    "assessment.assessments",
    { entity_id: entity_id },
  ]);

  if (isLoading) {
    return <p>Loading Assessment...</p>;
  }

  if (!data) {
    return <Error statusCode={404} />;
  }

  if (error) {
    Router.push("/");
  }

  return (
    <div>
      {/* <DashboardAssessmentSidebar entity_id={entity_id} />
      <DashboardAssessment entity_id={entity_id} /> */}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { assessmentId } = context.params;
  const entity_id = assessmentId.split("+")[0];
  const assessment_id = assessmentId.split("+")[1];
  return {
    props: {
      entity_id: entity_id,
    },
  };
}

export default EntityPage;
