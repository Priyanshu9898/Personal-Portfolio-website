/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
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
          <Skill name="NextJS" x="-35vw" y="-1vw" />
          <Skill name="TypeScript" x="11vw" y="-8vw" />
          <Skill name="Prisma" x="0vw" y="-14vw" />
          <Skill name="Firebase" x="-25vw" y="15vw" />
          <Skill name="Tailwind CSS" x="16vw" y="11vw" />
          <Skill name="NodeJs" x="-5vw" y="19vw" />
          <Skill name="MongoDB" x="23vw" y="-15vw" />
          <Skill name="MySql" x="-20vw" y="-11vw" />
          <Skill name="Data Structures and Algorithms" x="-4vw" y="-19vw" />
          <Skill name="Pupeteer" x="-30vw" y="-16vw" />
          <Skill name="Modern Web Design" x="37vw" y="-6vw" />
          <Skill name="Git/Github" x="36vw" y="8vw" />
          <Skill name="Programming Languages" x="-37vw" y="-8vw" />
          <Skill name="Deployment" x="-30vw" y="7vw" />
          <Skill name="CI/CD deployment" x="-20vw" y="0vw" />
          <Skill name="Chakra UI" x="20vw" y="17vw" />
          <Skill name="Shadcn.UI" x="33vw" y="2vw" />
        </div>

        <div className="circle-part w-full h-screen flex items-center justify-center rounded-full">
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            ML
          </motion.div>
          <Skill name="Python" x="-10vw" y="-8vw" />
          <Skill name="Object Oriented Programming" x="-15vw" y="7vw" />
          <Skill name="Machine learing" x="18vw" y="3vw" />
          <Skill name="Deep leaning" x="0vw" y="10vw" />
          <Skill name="Data Analysis" x="-35vw" y="-1vw" />
          <Skill name="Feature extraction" x="11vw" y="-8vw" />
          <Skill name="Data Collection" x="0vw" y="-14vw" />
          <Skill name="Data Processing" x="-25vw" y="15vw" />
          <Skill name="Flask" x="16vw" y="11vw" />
          <Skill name="FastAPI" x="-5vw" y="19vw" />
          <Skill name="MongoDB" x="23vw" y="-15vw" />
          <Skill name="TensorFlow" x="-20vw" y="-11vw" />
          <Skill name="PyTorch" x="-4vw" y="-19vw" />
          <Skill name="NLP" x="-4vw" y="-24vw" />
          <Skill name="Computer Vision" x="-19vw" y="-19vw" />
          <Skill name="BeautifulSoup" x="-34vw" y="-14vw" />
          <Skill name="Fine Tuning" x="14vw" y="-20vw" />
          <Skill name="HuggingFace" x="37vw" y="-6vw" />
          <Skill name="Git/Github" x="36vw" y="8vw" />
          <Skill name="DVC" x="-37vw" y="-8vw" />
          <Skill name="MLOPS" x="-30vw" y="7vw" />
          <Skill name="CI/CD deployment" x="-20vw" y="0vw" />
          <Skill name="MlFlow" x="20vw" y="17vw" />
          <Skill name="Model Pipeline" x="33vw" y="2vw" />
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
                    "HTML5/CSS3",
                    "JavaScript",
                    "TypeScript",
                    "PHP",
                    "NodeJs",
                    "Git",
                    "GitHub",
                    "Data Structures and Algorithms",
                    "Canva",
                    "Basic Figma",
                    "DVC",
                    "MlFlow",
                    "AWS",
                    "Azure",
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
                    "NextJS",
                    "Redux",
                    "Material‑UI",
                    "Tailwind CSS",
                    "WordPress",
                    "ExpressJS",
                    "ChakraUI",
                    "Shadcn.UI",
                    "Pandas",
                    "NumPy",
                    "Scikit-learn",
                    "TensorFlow",
                    "Keras",
                    "PyTorch",
                    "Prisma",
                    "Bootstrap",
                    "Pupeeter",
                    "Beautiful Soup",
                    "Python-Kafka",
                    
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
