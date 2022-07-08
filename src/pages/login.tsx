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

      <div className="w-screen min-h-screen flex flex-col justify-center">
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
