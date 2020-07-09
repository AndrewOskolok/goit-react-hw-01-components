import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";

const TransactionHistory = ({ items }) => {
  return (
    <section className={styles.section}>
      <table className={styles["transaction-history"]}>
        <thead>
          <tr className={styles.tableHead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currenc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
