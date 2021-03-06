import type { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Router from "next/router";
import DashboardHome from "../components/DashboardHome";

const Home: NextPage = () => {
  const { status, data } = useSession({
    required: true,
    onUnauthenticated() {
      Router.push("/login");
    },
  });

  return (
    <>
      <Head>
        <title>Neutral Party</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardHome />
    </>
  );
};

export default Home;
