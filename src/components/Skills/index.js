import {React, useEffect} from "react";
import "./index.css";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 absolute shadow-black cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 2 }}
    >
      {name}
    </motion.div>
  );
};

const MobileSkill = ({ name }) => {
  return (
    <motion.span
      className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-blue-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.span>
  );
};

function index() {
    const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
      });
    }
  }, [controls, inView]);

  return (
    <>
      <div className="main-Skills">
        <h2 className="headpart">Skills</h2>
        <div className="circle-part w-full h-screen flex items-center justify-center rounded-full">
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>
          <Skill name="HTML" x="-10vw" y="-8vw" />
          <Skill name="CSS" x="-15vw" y="7vw" />
          <Skill name="Javascript" x="18vw" y="3vw" />
          <Skill name="ReactJS" x="0vw" y="10vw" />
          <Skill name="NextJS" x="-30vw" y="-1vw" />
          <Skill name="PHP" x="11vw" y="-8vw" />
          <Skill name="Figma" x="0vw" y="-14vw" />
          <Skill name="Firebase" x="-25vw" y="15vw" />
          <Skill name="Tailwind CSS" x="16vw" y="12vw" />
          <Skill name="NodeJs" x="-5vw" y="19vw" />
          <Skill name="MongoDB" x="23vw" y="-15vw" />
          <Skill name="MySql" x="-20vw" y="-11vw" />
          <Skill name="DsA" x="-4vw" y="-19vw" />
          <Skill name="Web Design" x="37vw" y="-6vw" />
          <Skill name="Git/Github" x="36vw" y="8vw" />
          <Skill name="Programming Languages" x="-37vw" y="-8vw" />
        </div>
        <div ref={ref} className="mobile-part">
          <div className="container mx-auto">
            <motion.main className="p-4" initial={{ opacity: 0, y: 50 }}
              animate={controls}>
              <div className="block p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Programming & Developer Tools:
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "C/C++",
                    "Python",
                    "Java",
                    "HTML5/CSS3/JavaScript",
                    "PHP",
                    "NodeJs",
                    "Git",
                    "GitHub",
                    "Data Structures and Algorithms",
                    "Canva",
                    "Basic Figma",
                  ].map((skill) => (
                    <MobileSkill name={skill} />
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">Database:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Firebase", "MongoDB", "Upstash", "MySql"].map((skill) => (
                    <MobileSkill name={skill} />
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  Frameworks & Libraries:
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "ReactJS",
                    "Spring Boot",
                    "Redux",
                    "Material‑UI",
                    "Tailwind",
                    "WordPress",
                    "Express",
                    "NextJS",
                    "Pandas",
                    "NumPy",
                    "Bootstrap",
                  ].map((skill) => (
                    <MobileSkill name={skill} />
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">Others:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Graphic Design", "Video Editing", "Adobe Tools"].map(
                    (skill) => (
                      <MobileSkill name={skill} />
                    )
                  )}
                </div>
              </div>
            </motion.main>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
