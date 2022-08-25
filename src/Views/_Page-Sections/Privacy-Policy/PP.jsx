import React, { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "../../Context/GlobalContext";

import { motion } from "framer-motion";
// import Accordion from "react-bootstrap/Accordion";

import styles from "./Styles/PP.module.css";
const PP = () => {
  return (
    <div className={styles.PP__Section}>
              <div className={styles.PP__Contents}>
        <img
          src={require("../../../Assets/Images/Brown-Topography-Map.jpg")}
          alt=""
          className={styles.PP_Image}
        />
        <div className={styles.PP__Box}>
          <p className={styles.PP_Text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum
            ab quaerat corrupti mollitia deleniti? Similique non magnam eaque
            facilis.
          </p>

          <button className={styles.PP__Button}>Privacy & Policy</button>
        </div>
      </div>
    </div>
  )
}

export default PP