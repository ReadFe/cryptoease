"use client";

import Content from "@/components/Content";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import SignIn from "./auth/signin/page";


export default function Home() {
  const { data: session } = useSession();
  
  return (
    <div>
      {session ? (
        <>
          <Navbar features={['About', 'Sources', 'Contact']}/>
          <Content/>
        </>
      ) : (
        <SignIn/>
      )}
    </div>
  );
}
