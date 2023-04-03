import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />

        <title>Frontend Mentor | Planets fact site</title>
      </Head>
      <div className="min-h-screen w-screen bg-[#070724]  bg-[url('../public/background-stars.svg')]  bg-local ">
        <Header />

        <Component {...pageProps} />
      </div>
    </>
  );
}
