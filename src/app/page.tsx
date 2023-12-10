"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Navbar from "./../components/Navbar/Navbar";
import HomePart from "./../components/Landing/index.jsx";
import AboutPart from "./../components/Description/index.jsx";
import Project from "./../components/Projects/index.jsx";
import SlidImg from "./../components/SlidingImages/index.jsx";
import Contact from "./../components/Contact/index.jsx";
import Work from "./../components/WorkPart/index";
import Skills from "./../components/Skills/index";
import Experiences from "./../components/Experience/index";
import Publications from "./../components/Publication/index";
import MobileContact from "./../components/MobileContact/index";
import Preloader from "./../components/Preloader/index.jsx";
import { AnimatePresence } from "framer-motion";
// import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  // const scroll = new LocomotiveScroll();

  return (
    <div>
      <main className={styles.main}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Navbar />
        <HomePart />
        <AboutPart />
        <Skills />
        <Experiences />
        <Publications />
        <Work />
        <Project />
        <SlidImg />
        <MobileContact />
        <Contact />
      </main>
    </div>
  );
}
