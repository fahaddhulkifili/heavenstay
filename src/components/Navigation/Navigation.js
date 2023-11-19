import React from "react";
import HeavenStayLogo from "../../resources/icons/HeavenStayLogo";
import * as styles from "./Navigation.module.scss";
import Container from "../UI/Container/Container";

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
        </nav>
      </Container>
    </div>
  );
};

export default Navigation;
