import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Siddhi</h1>
        <p className={styles.description}>
        Engineering student passionate about data-driven decisions, skilled in Power BI, Excel, and SQL, aspiring Business Analyst
        </p>
        <a href="mailto:siddhikewatkar27@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/data/siddhi2.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
