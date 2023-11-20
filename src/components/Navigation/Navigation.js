import React from "react";
import HeavenStayLogo from "../../resources/icons/HeavenStayLogo";
import * as styles from "./Navigation.module.scss";
import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";

const Navigation = ({ activeSection, sections }) => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
    textDecoration: "underline",
  };

  return (
    <div className={styles.headerWrapper}>
      <Container>
        <nav className={styles.navWrapper}>
          <a href="#hero" className={styles.logoWrapper}>
            <HeavenStayLogo />
          </a>
          <ul className={styles.navList}>
            {sections.map((section) => (
              <li
                key={section.id}
                className={activeSection === section.id ? "active" : ""}
                style={{ margin: "0 10px" }}
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
            <Button>Enquiry</Button>
            <Button>Book Now</Button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navigation;
