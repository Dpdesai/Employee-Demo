import React from "react";

function EmployeeListItem(props) {
  return (
    <li>
      <img src={props.item.img} alt="img" />
      <div>
        <p>{props.item.Name}</p>
        <p className="designation">{props.item.Designation}</p>
      </div>
    </li>
  );
}

export default EmployeeListItem;
