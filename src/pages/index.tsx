import Head from "next/head";

import Navbar from "@/components/navbar.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>YourWeight | Landing Page</title>
      </Head>
      <Navbar />
    </>
  );
}
