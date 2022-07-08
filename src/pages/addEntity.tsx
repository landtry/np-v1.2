import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Router from "next/router";
import AddEntity from "../components/AddEntity";
import Login from "../components/Login";

const AddEntityPage: NextPage = () => {
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

      <AddEntity />
    </>
  );
};

export default AddEntityPage;
