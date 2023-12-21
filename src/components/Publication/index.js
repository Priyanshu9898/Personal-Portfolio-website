/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { React, useRef, useEffect } from "react";
import "./index.css";
import { motion, useInView, useScroll, useAnimation } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time }) => {
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

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-red-600 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-black/75">{time}</span>
      </motion.div>
    </li>
  );
};

function index() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });


  return (
    <>
      <div className="main-exp" id="publications">
        <h1 className="font-bold text-8x1 w-full text-center">Publications</h1>
        <div ref={ref} className="exp-part w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="line-part absolute left-9 top-1 w-[4px] h-full bg-black origin-top"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
              position="Advancements in Environmental Sound Classification Using Machine Learning and Deep Learning Approaches on
              the UrbanSound8k Dataset"
              company="ICIIP-2023"
              companyLink="https://www.juit.ac.in/iciip_2023/"
              time="The 7th International Conference on Image Information Processing (ICIIP-2023) - IEEE"
            />

            <Details
              position="Cyber Security and Data Mining: Detecting Malicious URL Using Data Mining Techniques"
              company="ICCSAI-2023"
              companyLink="http://www.iccsai.in/"
              time="The 2nd International Conference on Communication, Security and Artificial Intelligence (ICCSAI-2023) – IEEE"
            />

            <Details
              position="Classification of Online News Articles Using Optimized Deep Learning Models"
              company="ICIITCEE 2024"
              companyLink="https://iciitcee.in/"
              time=" The 2nd International Conference on
              Intelligent and Innovative Technologies in Computing, Electrical, and Electronics (ICIITCEE 2024) – IEEE
              "
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default index;
