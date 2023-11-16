import styles from './style.module.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function index() {
  return (
    <div className={styles.footer}>
        {/* <a href="https://www.linkedin.com/in/hb134/" className={styles.link} target="/blank">Linkedin</a>
        <a href="https://www.instagram.com/harshbaldaniya_5/" className={styles.link} target="/blank">Instagram</a>
        <a href="https://github.com/HarshBaldaniya" className={styles.link} target="/blank">Github</a> */}
        <a href="https://www.instagram.com/harshbaldaniya_5/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/in/hb134/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/HarshBaldaniya" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        {/* <a>LinkedIn</a> */}
    </div>
  )
}
