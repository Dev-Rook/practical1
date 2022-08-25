import React, { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "../../Context/GlobalContext";

import styles from "./Styles/Login.module.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.Login}>
        <form action="GET" className={styles.Login__Form}>
            <fieldset>
                <input placeholder="First Name" className={styles.Input} type="text" name="FName" id="" />
                <input placeholder="Last Name" className={styles.Input} type="text" name="LName" id="" />
                <input placeholder="Password" className={styles.Input} type="Password" name="Password" id="" />
            </fieldset>

            <button type="Submit" className={styles.Submit_Button}>
                Login
            </button>
        </form>
    </div>
  )
}

export default Login