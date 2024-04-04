'use client';
import DataCloudComputing from "../components/shared/DataCloudComputing";
import HeroBanner from "../components/shared/HeroBanner";
import Information from "../components/shared/Information";
import Join from "../components/shared/Join";
import Recommended from "../components/shared/Recommended";
import Header from "../components/shared/header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="pt-[45px]">
        <Information />
        <HeroBanner />
        <Recommended />
        <Join />
        <DataCloudComputing />
      </section>
    </>
  );
}
