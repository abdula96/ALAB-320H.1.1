import React from "react";
import "./EmployeeListItem.css";

function EmployeeListItem({ name }) {
  return (
    <div className="employee-list-item">
      <p>{name}</p>
    </div>
  );
}

export default EmployeeListItem;
