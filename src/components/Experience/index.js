/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import {React, useRef, useEffect} from 'react'
import "./index.css";
import {motion, useInView, useScroll, useAnimation} from "framer-motion";
import LiIcon from "./LiIcon"

const Details = ({position, company, companyLink, time, address, work}) => {
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

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
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
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-red-600 capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-black/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div> 
        </li>
}


function index() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ['start end', "center start"]
        }
    )
  return (
    <>
        <div className="main-exp" id="experience">
            <h1 className="font-bold text-8x1 w-full text-center">Experiences</h1>
            <div ref={ref} className="exp-part w-[75%] mx-auto relative">
                <motion.div style={{scaleY: scrollYProgress}} className="line-part absolute left-9 top-1 w-[4px] h-full bg-black origin-top" />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                        position="Backend Developer (Contract)" company="Zeiierman Trading"
                        companyLink="https://zeiiermantrading.com/"
                        time="September 2023" address="REMOTE"
                        work="Developing a scalable and reliable Node.js backend application.
                        Implemented advanced security measures for authentication and authorization.
                        Custom-designed a Stripe payment system for versatile plan management.
                        Integrated MailChimp for enhanced user communication.
                        "
                        
                    />
                    <Details 
                        position="Full Stack Web Development" company="DEED Mobility Solutions"
                        companyLink="https://iic.pdeu.ac.in/pdeu_startup/deed-mobility-solutions/"
                        time="July 2022 – August 2022" address="Gandhinagar, Gujarat, India"
                        work="Designed and developed a responsive web app with 
                        ReactJS, Material UI, Tailwind, and Redux, leading to a 
                        remarkable 25% surge in user engagement. Revamped MongoDB queries and architecture, 
                        reducing payment response time from 60ms to an 
                        impressive 10ms, ensuring seamless and rapid 
                        transactions."
                    />
                    <Details 
                        position="Web Developer Internship" company="Manentia AI"
                        companyLink="https://manentia.ai/"
                        time="November 2021 - April 2022" address="Gandhinagar, Gujarat, India"
                        work="During my internship as a web developer, My main task was to
                        develop a website for his startup, in addition to assisting
                        him with video editing and animation tasks. This internship
                        was for a period of six months."
                    />
                </ul>
            </div>
        </div>
    </>
  )
}

export default index