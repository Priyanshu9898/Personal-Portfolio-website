/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./style.module.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";

export default function index() {
  const phrase =
    "As a Computer Engineer with a profound foundation in both theory and practice, my academic journey at Pandit Deendayal Energy University has been enriched with cutting-edge projects in data structures, operating systems, and a spectrum of advanced technologies like machine learning and deep learning. My professional path is distinguished by significant contributions to transformative projects, particularly in enhancing internet security and pioneering in text summarization, reflecting my deep expertise in latest technologies. Driven by an insatiable curiosity and a commitment to excellence, I am dedicated to leveraging my comprehensive skill set to develop innovative solutions that address complex societal challenges and push the frontiers of technology.";
  const description = useRef(null);
  const isInView = useInView(description);

  const handleDownloadResume = () => {
    // Replace 'path-to-your-resume.pdf' with the actual path to your PDF resume
    const resumeURL = "https://drive.google.com/file/d/1TArgGRhzW79oUXrdo-n82c55YN-MrswM/view?usp=sharing";
    window.open(resumeURL, "_blank");
  };

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p className={styles.aboutPart}>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                  className="textPart"
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        {/* <motion.p variants={opacity} animate={isInView ? "open" : "closed"}></motion.p> */}
        <div data-scroll data-scroll-speed={0.1} className={styles.btn}>
          <Rounded className={styles.button}>
            <p>About me</p>
          </Rounded>
          <Rounded onClick={handleDownloadResume} className={styles.buttonpart}>
            <p>Resume</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
