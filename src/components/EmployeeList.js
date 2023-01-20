import React from "react";
import EmployeeListItem from "./EmployeeListItem";

const employees = [
  {
    id: 1,
    Name: "James King",
    Designation: "President and CEO",
    img: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    Name: "Julie Taylor",
    Designation: "VP of Marketing",
    img: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    Name: "Eugene Lee",
    Designation: "CFO",
    img: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    Name: "John Williams",
    Designation: "VP of Engineering",
    img: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    Name: "Ray Moore",
    Designation: "VP of Sales",
    img: "https://via.placeholder.com/50",
  },
  {
    id: 6,
    Name: "Paul Jones",
    Designation: "QA Manager",
    img: "https://via.placeholder.com/50",
  },
  {
    id: 7,
    Name: "Test",
    Designation: "Automation Manager",
    img: "https://via.placeholder.com/50",
  },
];

function EmployeeList() {
  return (
    <ul className="employee-list-item">
      {/* <EmployeeListItem /> */}
      {employees.map((item) => (
        <EmployeeListItem item={item} />
      ))}
      {/* {listElements} */}
    </ul>
  );
}

export default EmployeeList;
