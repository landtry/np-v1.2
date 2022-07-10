import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Error from "next/error";
import Router, { useRouter } from "next/router";
import DashboardDetailsSidebar from "../../components/DashboardDetailsSidebar";
import DashboardDetails from "../../components/DashboardDetails";
import { trpc } from "../../utils/trpc";

const AssessmentPage: NextPage = ({ entity_id, assessment_id }: any) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      Router.push("/login");
    },
  });

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
    <div className="flex h-full justify-between">
      <DashboardDetailsSidebar
        entity_id={entity_id}
        assessment_id={assessment_id}
      />
      <DashboardDetails entity_id={entity_id} assessment_id={assessment_id} />
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
      assessment_id: assessment_id,
    },
  };
}

export default AssessmentPage;
