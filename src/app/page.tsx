import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SchoolsSection from "@/components/schools-section/SchoolsSection";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SchoolsSection />
      <Footer />
    </>
  );
}
