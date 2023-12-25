import React from "react";
import * as styles from "./Button.module.scss";

const Button = (props) => {
  let buttonClass = `${styles.btnWrapper}`;
  if (props.type === "secondary") {
    buttonClass += ` ${styles.secondaryBtn}`;
  } else if (props.type === "primary") {
    buttonClass += ` ${styles.primaryBtn}`;
  }
  return <a className={buttonClass}>{props.children}</a>;
};

export default Button;
