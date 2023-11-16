import styles from "./style.module.css";
import { motion } from "framer-motion";
import Magnetic from "../../../common/Magnetic";
import Link from "next/link";

export default function index() {
  return (
    <motion.div className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.info}>
          <div>
            <Link
              href="#"
              className={styles.link}
            >
              <Magnetic>
                <p>Home</p>
              </Magnetic>
            </Link>
            <Link
              href="#about"
              className={styles.link}
            >
              <Magnetic>
                <p>About</p>
              </Magnetic>
            </Link>
            <Link
              href="#experience"
              className={styles.link}
            >
              <Magnetic>
                <p>Work</p>
              </Magnetic>
            </Link>
            <Link
              href="#publications"
              className={styles.link}
            >
              <Magnetic>
                <p>Publications</p>
              </Magnetic>
            </Link>
            <Link
              href="#project"
              className={styles.link}
            >
              <Magnetic>
                <p>Projects</p>
              </Magnetic>
            </Link>
            <Link
              href="#blogs"
              className={styles.link}
            >
              <Magnetic>
                <p>Blogs</p>
              </Magnetic>
            </Link>
            <Link
              href="#contact"
              className={styles.link}
            >
              <Magnetic>
                <p>Contact</p>
              </Magnetic>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
