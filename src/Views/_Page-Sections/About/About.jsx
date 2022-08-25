import React, { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "../../Context/GlobalContext";

import { motion } from "framer-motion";
// import Accordion from "react-bootstrap/Accordion";

import styles from "./Styles/About.module.css";

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.About__Contents}>
        <img
          src={require("../../../Assets/Images/Brown-Topography-Map.jpg")}
          alt=""
          className={styles.About_Image}
        />
        <div className={styles.About__Box}>
          <p className={styles.About_Text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum
            ab quaerat corrupti mollitia deleniti? Similique non magnam eaque
            facilis.
          </p>

          <button className={styles.About__Button}>About</button>
        </div>
      </div>
    </div>
  );
};

export default About;
