import React from "react";
import Header from "./Header";
import SchoolsArea from "./SchoolsArea";
import ReasonsSection from "./ReasonsSection";

const SchoolsSection = () => {
  return (
    <section className="container mx-auto px-4">
      <section className="py-8 lg:py-20">
        <Header />
        <SchoolsArea />
      </section>
      <section className="min-h-[498px] pb-8 lg:pb-20">
        <ReasonsSection />
      </section>
    </section>
  );
};

export default SchoolsSection;
