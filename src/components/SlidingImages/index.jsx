/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.css";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "Hiring.png",
  },
  {
    color: "#d6d7dc",
    src: "Budhaa.png",
  },
  {
    color: "#e3e3e3",
    src: "Assi.png",
  },
  {
    color: "#21242b",
    src: "Spider-Man.png",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "VLOG02-2.png",
  },
  {
    color: "#e5e0e1",
    src: "Filmmaking-Workshop.png",
  },
  {
    color: "#d7d4cf",
    src: "EDM1.png",
  },
  {
    color: "#e1dad6",
    src: "Snake-Game.png",
  },
];

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const container = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
