/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from "react";
import "../Section.css";
import HoverVideoPlayer from "react-hover-video-player";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Link } from "@nextui-org/react";

const bigBuckBunnySrc = "./videos/storeproject.mp4";

function Index() {
  const [ref, isInView] = useInView();

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const textControls = useAnimation();

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
      textControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
      textControls.start("hidden");
    }
  }, [isInView]);


  return (
    <>
      <motion.div ref={ref} className="main-section">
        <motion.div
          className="item left-part"
          variants={{
            hidden: { opacity: 0, x: 85 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: .3, delay: 0.1 }}
        >
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate={textControls}
            transition={{ duration: .3, delay: 0.3 }}
          >
            SnapShop
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={textControls}
            transition={{ duration: .3, delay: 0.4 }}
          >
            Crafted an online shopping platform utilizing React.js, Node.js, and MongoDB, integrating swift product sorting, secure user validation including Google login, and an intuitive cart system, Resulting in a 25% uptick in user interaction and a 20% enhancement in conversion rates.
          </motion.p>
          <motion.div className="btn-part" 
          variants={textVariants}
          initial="hidden"
          animate={textControls}
          transition={{ duration: .3, delay: 0.5 }}
          >
          <Link href="https://hb-store.vercel.app/" target="_blank" 
                className="btn-view transition ease-in-out delay-100 transition-duration:1.5s flex items-center bg-red-700 text-white p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-transparent hover:text-black
                border-2 border-solid border-transparent hover:border-black outline-none"
                >LIVE</Link>
          <Link href="https://github.com/HarshBaldaniya/HB-Store" target="_blank" 
                className="btn-view transition ease-in-out delay-100 transition-duration:1.5s flex items-center bg-black text-white p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-transparent hover:text-black
                border-2 border-solid border-transparent hover:border-black outline-none"
                >GitHub</Link>
          </motion.div>
        </motion.div>
        <motion.div className="item right-part" variants={{
          hidden: { opacity: 0, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: .4, delay: .2 }}>
          <HoverVideoPlayer variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 },
          }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: .4, delay: .4 }}
            videoSrc={bigBuckBunnySrc}
            // pausedOverlay={
            //   <img
            //     src="/images/wix.jpg"
            //     alt=""
            //     style={{
            //       width: '100%',
            //       height: '100%',
            //       objectFit: 'cover',
            //     }}
            //   />
            // }
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Index;
