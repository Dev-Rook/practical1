import React, { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "../../Context/GlobalContext";

import { motion } from "framer-motion";
// import Accordion from "react-bootstrap/Accordion";

import styles from "./Styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.Hero}>
        <div className={styles.Diffuser}>
            <div className={styles.Membership__Box}>
                <p className={styles.Membership_Text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum ab quaerat corrupti mollitia deleniti? Similique non magnam eaque facilis.
                </p>

                <button className={styles.Membership__Button}>
                    Membership
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero