import Head from "next/head";

import Home from "../components/home/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Map Assignment</title>
        <meta name="description" content="Snap! Shop assignemnt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/snapp-shop-logo.webp" />
      </Head>
      <Home />
    </>
  );
}
