import React from "react";
import style from "./DataTable.module.css";

const TransactionTable = ({ data }) => {
  return (
    <table className={style.mainTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}        >
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
