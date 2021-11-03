import React from "react";

const DropDownMenu = ({ select, menuName, onChange }) => {
  //   console.log("Subject Names is", select);
  return (
    <>
      <select name={menuName} onChange={onChange()}>
        {select.map((option, index) => {
          return (
            <React.Fragment key={index}>
              <option value={option?.label}>{option?.value}</option>
            </React.Fragment>
          );
        })}
      </select>
    </>
  );
};

export default DropDownMenu;
