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
            <a href="mailto:2023harsh.baldaniya@gmail.com">
              2023harsh.baldaniya@gmail.com
            </a>
          </p>
          <p>+91 9265707138</p>
          <p>Surat, Gujarat, India</p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/harshbaldaniya_5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/hb134/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/HarshBaldaniya"
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
