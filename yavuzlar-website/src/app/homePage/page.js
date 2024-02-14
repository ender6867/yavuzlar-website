"use client";
import About from "@/components/About/About";
import Intro from "@/components/Intro/Intro";
import Cards from "@/components/Cards/Cards";
import Contact from "@/components/Contact/Contact";

export default function Homepage() {
  return (
    <div>
      <div>
        <Intro />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
