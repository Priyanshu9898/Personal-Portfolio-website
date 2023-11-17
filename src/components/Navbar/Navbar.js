/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useLayoutEffect, useEffect } from "react";
import "./Navbar.css";
import Logo from "./Logo/logo";
import NavbarLink from "./NavbarLink/index";
import { motion, useAnimation, useInView } from "framer-motion";

const Navbar = () => {
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
    <>
      <div className="firstNavpart">
        <motion.div ref={ref} className="listNavbar">
          <motion.div className="logoPart"
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 3 }}>
            <Logo />
          </motion.div>
          <motion.div className="rightPart" variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 3 }}>
            <NavbarLink />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
