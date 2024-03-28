"use client";

import PageLayout from "@/app/components/Layout/PageLayout";
import ScrollToTopButton from "../components/ScrollToTopButton";
import AboutHero from "../components/AboutHero";
import AboutCheck from "../components/AboutCheck";
import AboutBenefit from "../components/AboutBenefit";

export default function About() {
  return (
    <PageLayout>
      <div className="my-10">
        <AboutHero />
      </div>
      <div className="my-10">
        <AboutCheck />
      </div>
      <div className="my-10">
        <AboutBenefit />
      </div>
      <ScrollToTopButton />
    </PageLayout>
  );
}
