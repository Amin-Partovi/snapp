import "../styles/globals.css";
import type { AppProps } from "next/app";

// if (process.env.NODE_ENV === "development") {
//   import("../mocks").then(({ setupMocks }) => {
//     setupMocks();
//   });
// }

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
