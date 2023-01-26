import Head from "next/head";
import Contact from "../components/Contact";
import Expertise from "../components/Expertise";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import How from "../components/How";
import Partner from "../components/Partner";
import Rapidly from "../components/Rapidly";
import Support from "../components/Support";

export default function Home() {
  return(
    <div className="bg-black">
      <Head>
        <title>B Labs</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Hero />
        <Rapidly />
        <How />
        <Partner />
        <Support />
        <Expertise />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}