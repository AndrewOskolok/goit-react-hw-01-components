import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import StatItem from "../StatItem/StatItem";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles["stat-list"]}>
        {stats.map((obj) => (
          <StatItem
            key={obj.id}
            label={obj.label}
            percentage={obj.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
