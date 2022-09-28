import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:bg-gray-800">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
