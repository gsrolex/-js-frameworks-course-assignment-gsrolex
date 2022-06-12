import Head from "next/head";
import Layout from "./components/layout/Layout";
import Heading from "./components/Heading";

export default function Home() {
  return (
    <Layout>
      <Head title="About" />

      <div className="container ">
        <Heading className="homeHeading" content="admin" color="black" />
      </div>
    </Layout>
  );
}
