"use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/about";
import Services from "@/components/Services";
import Work from "@/components/Work"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}
