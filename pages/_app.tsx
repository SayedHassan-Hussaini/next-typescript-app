import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import MainHeader from "../components/layout/main-header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Layout>
    <>
      <MainHeader />
      <Component {...pageProps} />
    </>
    // </Layout>
  );
}
