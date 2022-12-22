import type { AppProps } from "next/app";
// pages/_app.js
import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../public/Sahel-FD.woff2" });

import "../styles/globals.css";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
