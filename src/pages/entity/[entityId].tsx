import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Error from "next/error";
import Router, { useRouter } from "next/router";
import DashboardAssessmentSidebar from "../../components/DashboardAssessmentSidebar";
import DashboardAssessment from "../../components/DashboardAssessment";
import { trpc } from "../../utils/trpc";

const EntityPage: NextPage = () => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      Router.push("/login");
    },
  });

  const router = useRouter();

  const entity_id = router.query.entityId as string;

  const { data, isLoading, error } = trpc.useQuery([
    "entity.single-entity",
    { entity_id },
  ]);

  if (isLoading) {
    return <p>Loading Entity...</p>;
  }

  if (!data) {
    return <Error statusCode={404} />;
  }

  if (error) {
  }

  return (
    <div>
      <DashboardAssessmentSidebar entity_id={entity_id} />
      <DashboardAssessment entity_id={entity_id} />
    </div>
  );
};

export default EntityPage;
