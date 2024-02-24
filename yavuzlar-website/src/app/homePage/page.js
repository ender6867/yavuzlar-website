"use client";
import About from "@/components/About/About";
import Intro from "@/components/Intro/Intro";
import Cards from "@/components/Cards/Cards";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Articles from "@/components/Articles/Articles";
import Card2 from "@/components/Cards/Card2";

export default function Homepage() {
  return (
    <div>
      <div>
        <Intro />
      </div>
      <div>
        <Cards />
        {/* <Card2 /> */}
      </div>

      <div>
        <About />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Articles />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
