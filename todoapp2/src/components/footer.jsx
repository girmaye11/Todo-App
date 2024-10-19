import React from 'react'
import styles from "./footer.module.css";

function footer({completedtodos,totaltodos}) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos:{completedtodos}</span>
      <span className={styles.item}>Total Todos:{totaltodos}</span>
    </div>
  )
}

export default footer
