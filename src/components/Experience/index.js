/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { React, useRef, useEffect } from "react";
import "./index.css";
import { motion, useInView, useScroll, useAnimation } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <span className="capitalize font-medium text-black/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">
          <ul>
            {work.map((point, index) => (
              <li key={index} style={{ display: "flex" }}>
                <span>•&nbsp;&nbsp;</span>
                {point}
              </li>
            ))}
          </ul>
          {/* {work} */}
        </p>
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

  const ZeiiermanPoints = [
    "Orchestrated the development of a scalable Node.js backend application, ensuring application reliability and meeting advanced functional requirements.",
    "Implemented a secure authentication system with role-based access controls, significantly enhancing data security and privacy.",
    "Custom-designed and integrated a Stripe payment system, enabled dynamic plan management capabilities, notably elevating the user transactional experience through streamlined payment processes.",
    "Successfully integrated MailChimp for transactional email communication, boosting user engagement and improving the communication flow along with TradingView Bot for providing indicator scripts to users automatically.",
  ];

  const ISROPoints = [
    `Orchestrated Enhanced flood forecasting by integrating satellite data with deep learning and time series models, a project initiated at ISRO.`,
    `Utilized Google Earth Engine for collecting and processing large-scale satellite data and implemented advanced deep learning and time series models in Python.`,
    `Achieved a 73% improvement in flood forecasting capabilities over traditional methods.`,
    `Demonstrated a state-of-the-art flood prediction system, emphasizing the synergy between technology and environmental resilience.`,
  ];
  const elinfochipsPoints = [
    `Worked in a team of 3 and collaborated in developing a web-based communication solution akin to WhatsApp.`,
    `Leveraged technologies like NextJS, TypeScript, TailwindCSS, Socket.io, Prisma and MongoDB for real-time communication capabilities.`,
    `Led the design and implementation of deep learning models for motion forecasting, utilizing complex sensor datasets,
    providing insights into AI applications in real scenarios.`
];

  const AlphaBIPoints = [
    `Led the design and implementation of a SaaS product, starting with the scraping of over 60k hotel reviews from various sites using Puppeteer and BeautifulSoup, ensuring data accuracy and relevance.`,
    `Applied data cleaning, processing and fine-tuned prediction models using OpenAI, achieving significant enhancements in accuracy and relevance for the targeted dataset.`,
    `Developed a real-time data processing streaming pipeline using Python-Kafka, delivering immediate insights to end-users.`,
    `Managed frontend development task of inventory management system using Next.js, Prisma, Shadcn.ui, and MongoDB with a focus on user authentication, role-based access control authorization and third-party API integrations, substantially enriching the product's functionality.`,
    `Worked on RIA-mailer, fixed existing bugs, refactored the whole code to typescript, added additional features`,
  ];
  return (
    <>
      <div className="main-exp" id="experience">
        <h1 className="font-bold text-8x1 w-full text-center">Experiences</h1>
        <div ref={ref} className="exp-part w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="line-part absolute left-9 top-1 w-[4px] h-full bg-black origin-top"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
              position="Backend Developer (Contract)"
              company="Zeiierman Trading"
              companyLink="https://zeiiermantrading.com/"
              time="September 2023"
              address="REMOTE"
              work={ZeiiermanPoints}
            />
            <Details
              position="Research Intern"
              company="ISRO - Indian Space Research Organization"
              companyLink="https://www.isro.gov.in/"
              time="September 2023"
              address="Ahmedabad, Gujarat, India"
              work={ISROPoints}
            />
            <Details
              position="Software Development Intern"
              company="eInfochips (An Arrow Company)"
              companyLink="https://www.einfochips.com/"
              time="May 2023 - July 2023"
              address="Gandhinagar, Gujarat, India"
              work={elinfochipsPoints}
            />
            <Details
              position="Software Development Intern"
              company="AlphaBI"
              companyLink="https://www.alphabi.co/"
              time="May 2023 - July 2023"
              address="Surat, Gujarat, India"
              work={AlphaBIPoints}
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default index;
