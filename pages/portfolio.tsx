"use client";

import About from "./about";
import Contact from "./contact";
import Educations from "./education";
import Footer from "./footer";
import Header from "./header";
import Home from "./home";
import Projects from "./projects";
import Work from "./work";

export default function PortfolioV2() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      <Header></Header>
      <main className="pt-16">
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Educations></Educations>
        <Work></Work>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}
