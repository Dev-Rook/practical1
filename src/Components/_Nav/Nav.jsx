import React, { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "../../Context/GlobalContext";

import { motion } from "framer-motion";
// import Accordion from "react-bootstrap/Accordion";

import styles from "./Styles/Nav.module.css";

import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import TourIcon from "@mui/icons-material/Tour";
import SailingIcon from "@mui/icons-material/Sailing";
import PhishingIcon from "@mui/icons-material/Phishing";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const MenuIconVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [infoAccordion1, setInfoAccordion1] = useState(false);
  const [infoAccordion2, setInfoAccordion2] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const activeAccordion1 = () => {
    setInfoAccordion1((prev) => !prev);
  };

  const activeAccordion2 = () => {
    setInfoAccordion2((prev) => !prev);
  };

  return (
    <nav className={styles.Nav}>
      <div className={styles.NavWrapper}>
        <div className={styles.LeftSection}>
          <div className={styles.LogoContainer}>
            <img src={""} alt="" className={styles.Logo} />
          </div>

          <ul className={styles.NavLinkContainer}>
            <li className={styles.NavLinkItem}>
              <a href="#" target="_blank" className={styles.NavLink}>
                Home
              </a>
            </li>
            <li className={styles.NavLinkItem}>
              <a href="#" target="_blank" className={styles.NavLink}>
                About
              </a>
              <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </li>
            <li className={styles.NavLinkItem}>
              <a href="#" target="_blank" className={styles.NavLink}>
                Privacy & Policy
              </a>
              <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </li>
            <li className={styles.NavLinkItem}>
              <a href="#" target="_blank" className={styles.NavLink}>
                Contact
              </a>
              <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </li>
          </ul>
        </div>
        <div className={styles.RightSection}>
          <div className={styles.SearchContainer}>
            <SearchIcon />
            <input
              placeholder="Search..."
              type="text"
              className={styles.Search}
            />
          </div>

          <a href="#" className={styles.MembershipLink}>
            Membership
          </a>

          <button className={styles.ArticlesButton}>
            <p className={styles.ButtonText}>Articles</p>
          </button>
          <motion.div
            className={styles.MenuWrapper}
            variants={MenuIconVariants}
            initial="hidden"
            animate="visible"
          >
            <MenuIcon onClick={openMobileMenu} sx={{ fontSize: 50 }} />
          </motion.div>
        </div>
      </div>
      <div className={styles.ResponsiveSearchContainer}>
        <SearchIcon />
        <input
          placeholder="Search..."
          type="text"
          className={styles.ResponsiveSearch}
        />
      </div>

      {/* 🔻 Mobile Menu Start 🔻 */}

      <div
        className={`${styles.MobileMenu} ${
          mobileMenu ? styles.RevealMenu : ""
        }`}
      >
        <CloseIcon
          onClick={openMobileMenu}
          sx={{ fontSize: 50 }}
          className={styles.CloseIcon}
        />

        <ul className={styles.Mobile_NavLink_Container}>
          <li className={styles.Mobile_NavLink_Item}>
            <a href="#" className={styles.Mobile_NavLink}>
              Home
            </a>

            <HomeIcon />
          </li>
          <li className={styles.Mobile_NavLink_Item}>
            <span>
              <a
                onClick={activeAccordion1}
                href="#"
                className={styles.Mobile_NavLink}
              >
                About <KeyboardArrowDownIcon />
              </a>
            </span>

            <InfoIcon />
          </li>
          <li className={styles.Mobile_NavLink_Item}>
            <span>
              <a
                onClick={activeAccordion2}
                href="#"
                className={styles.Mobile_NavLink}
              >
                Privacy & Policy <KeyboardArrowDownIcon />
              </a>
            </span>

            <TourIcon />
          </li>
          <li className={styles.Mobile_NavLink_Item}>
            <a href="#" className={styles.Mobile_NavLink}>
              Contact
            </a>

            <CallIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
