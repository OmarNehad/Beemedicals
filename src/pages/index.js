import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Services from "../components/services";

export default function Home() {
  return (
    <Layout>
      <Services></Services>
    </Layout>
  );
}
