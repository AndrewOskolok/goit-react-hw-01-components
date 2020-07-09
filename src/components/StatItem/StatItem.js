import React from "react";
import styles from "./StatItem.module.css";

const StatItem = ({ label, percentage }) => {
  const randomColor = {
    backgroundColor:
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase(),
  };

  return (
    <li className={styles.item} style={randomColor}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatItem;
