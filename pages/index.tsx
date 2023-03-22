import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import useMovie from "@/hooks/useMovie";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "../hooks/useCurrentUser";

import useFavorites from "@/hooks/useFavorites";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import InfoModal from "@/components/InfoModal";

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
  const { data: movies = [] } = useMovie();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
    </>
  );
}
