import styles from "./style.module.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";

export default function index() {
  const phrase =
    "In the era in which I was born, technology was more than just a luxury; it was a staple, deeply integrated into the fabric of daily life. From a young age, I was captivated by Android applications, web development, augmented reality, and the rapidly expanding field of the Internet of Things. By the time I reached the 10th grade, this passion had evolved beyond a mere hobby into a genuine calling. Pursuing a degree in Computer Science Engineering seemed like a natural progression for me. Throughout my exploration, I've mastered various programming languages. Among them, I'm most proficient in C, C++, and Python, underscoring my dedication to both understanding and shaping the future of technology.";
  const description = useRef(null);
  const isInView = useInView(description);

  const handleDownloadResume = () => {
    // Replace 'path-to-your-resume.pdf' with the actual path to your PDF resume
    const resumeURL = "https://drive.google.com/file/d/1eStyOViM7Hzypfzxac81jfIeeiHe7Npt/view";
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
