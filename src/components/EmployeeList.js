import React from "react";
import EmployeeListItem from "./EmployeeListItem";
import "./EmployeeList.css";

function EmployeeList() {
  const employees = ["Alice", "Bob", "Charlie", "Diana"];

  return (
    <div className="employee-list">
      {employees.map((employee, index) => (
        <EmployeeListItem key={index} name={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
