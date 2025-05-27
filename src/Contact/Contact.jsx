import React from "react";

import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:siddhikewatkar27@gmail.com">siddhikewatkar27@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"data/linkedin.png"}
            alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/siddhi-kewatkar">linkedin.com/in/siddhi-kewatkar</a>
        </li>
        <li className={styles.link}>
          <img src={"data/github.png"} 
          alt="Github icon" />
          <a href="https://www.github.com/in/siddhikewatkar">github.com/siddhikewatkar</a>
        </li>
      </ul>
    </footer>
  );
};
