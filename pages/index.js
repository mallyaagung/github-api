import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {!session && (
        <button onClick={() => signIn()}>Sign In with Github</button>
      )}
      {session && (
        <button onClick={() => signOut()}>
          Sign Out ({session.user.name}){" "}
        </button>
      )}
    </>
  );
}
