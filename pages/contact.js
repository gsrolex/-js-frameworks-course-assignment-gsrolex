import Head from "next/head";
import Layout from "./components/layout/Layout";
import Heading from "./components/Heading";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <Layout>
      <Head title="About" />

      <div className="container ">
        <Heading className="homeHeading" content="contact" color="black" />
        <Contact />
      </div>
    </Layout>
  );
}
