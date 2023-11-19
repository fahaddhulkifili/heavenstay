import React from "react";
import * as styles from "./Container.module.scss";

const Container = ({ children }) => {
  return <div className={styles.containerWrapper}>{children}</div>;
};

export default Container;
