/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Head from "next/head";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function index() {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/272d3247d4.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className="navbar-main" id="contact">
        <h2>Let's work together</h2>
        <div className="mail">
          <p className="email-part">
            <a href="mailto:priyanshumalaviya9210@gmail.com">
            priyanshumalaviya9210@gmail.com
            </a>
          </p>
          <p>+91 6355007117</p>
          <p>Surat, Gujarat, India</p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/priyanshu_malaviya11/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/priyanshumalaviya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Priyanshu9898"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </>
  );
}

export default index;
