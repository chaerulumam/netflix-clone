import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "../hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <Navbar />
      <Billboard />
      {/* <h1 className="text-white">Netflix Clone</h1>
      <p className="text-white">Logged in as: {user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        Logout
      </button> */}
    </>
  );
}
