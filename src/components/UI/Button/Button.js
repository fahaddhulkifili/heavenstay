import React from "react";
import * as styles from "./Button.module.scss";

const Button = (props) => {
  return <a className={styles.btnWrapper}>{props.children}</a>;
};

export default Button;
