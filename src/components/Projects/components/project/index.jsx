import React from 'react'
import styles from './style.module.css';

export default function index({ index, title, manageModal, desc }) {
  return (
    <div
      onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }}
      onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>{desc}</p> 
    </div>
  )
}
