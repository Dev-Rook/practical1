import React, { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "../../Context/GlobalContext";

import { motion } from "framer-motion";
// import Accordion from "react-bootstrap/Accordion";

import styles from "./Styles/Home.module.css";

import Hero from '../_Page-Sections/Hero/Hero'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Hero />
    </div>
  )
}

export default Home;


