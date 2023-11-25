/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import styles from "./style.module.css";
import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import "./index.css";
import { DotGrid } from "./DotGrid";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "@nextui-org/react";
import CirclePart from "./circlePart";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  const [text] = useTypewriter({
    words: [
      "a Student",
      "a Researcher",
      "a Quick Learner",
      "Research Intern - ISRO",
      // "Software development Intern - eInfochips (An Arrow Company)",
      // "Software development Intern - AlphaBI",
      "a Software Engineer",
      "a Full Stack Developer",
      "ML lead - GDSC PDEU",
      "AI/ML Head - ACM PDEU",
      "Web Lead - TedX PDEU 2023",
      "Web Lead - ENCODE PDEU",
      
    ],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 50,
  });

  return (
    <>
      <motion.main
        variants={slideUp}
        initial="initial"
        animate="enter"
        className={styles.landing}
        id="home"
      >
        <div className={styles.mainPage}>
          <div className="heroBox">
            <motion.div ref={ref} className="heropart heropart1">
              <motion.h1
                className="titlePart"
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 3 }}
              >
                Hey, I&apos;m Priyanshu<span>.</span>
                <span className="wave-emoji">👋</span>
              </motion.h1>
              <motion.h2
                className="subtitlePart"
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 3.2 }}
              >
                I&apos;m{" "}
                <motion.span transition={{ delay: 4 }}>{text}</motion.span>
                <Cursor />
              </motion.h2>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 3.2 }}
                whileHover={{ scale: 1.2 }}
                className="resume-btn flex items-center mt-2"
              >
                <Link href="/Prriyashu_Resume.pdf" target="_blank" 
                className="transition ease-in-out delay-100 transition-duration:1.5s flex items-center bg-white text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-transparent hover:text-white
                border-2 border-solid border-transparent hover:border-white outline-none"
                >Resume</Link>
                <Link href="mailto:priyanshumalaviya9210@gmail.com" className="ml-4 mr-4 text-lg font-medium capitalize text-white underline">Connect</Link>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { left: 0 },
                  visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, delay: 2.7, ease: "easeIn" }}
                style={{
                  position: "absolute",
                  top: 4,
                  bottom: 4,
                  left: 0,
                  right: 0,
                  background: "#fff",
                  zIndex: 20,
                }}
              />
            </motion.div>
            <motion.div
              className="heropart heropart2"
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 3 }}
            >
              <DotGrid />
            </motion.div>
          </div>
        </div>
      </motion.main>
      <motion.div className="circlePart" id="about">
        <CirclePart />
      </motion.div>
    </>
  );
}
