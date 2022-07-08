import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Neutral Party</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen flex items-center justify-center">
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
