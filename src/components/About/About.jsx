import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/data/aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/data/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Business Analyst</h3>
              <p>
                Engineering student passionate about data-driven decisions, skilled in Power BI, Excel, and SQL, aspiring Business Analyst
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
