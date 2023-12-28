import React from "react";
import HeavenStayLogo from "../../resources/icons/HeavenStayLogo";
import * as styles from "./Navigation.module.scss";
import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";

const Navigation = ({ activeSection, sections }) => {
  const activeStyle = {
    color: "#4369B2",
  };

  return (
    <div className={styles.headerWrapper}>
      <Container>
        <nav className={styles.navWrapper}>
          <a href="#home" className={styles.logoWrapper}>
            <HeavenStayLogo />
          </a>
          <ul className={styles.navList}>
            {sections.map((section) => (
              <li
                key={section.id}
                className={activeSection === section.id ? "active" : ""}
              >
                <a
                  href={`#${section.id}`}
                  style={activeSection === section.id ? activeStyle : {}}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.headerBtnContainer}>
            <Button type={"primary"}>Enquiry</Button>
            <Button type={"secondary"}>Book Now</Button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navigation;
