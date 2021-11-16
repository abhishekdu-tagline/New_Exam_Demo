import React from "react";

const DropDownMenu = ({ selectListValues, name, onChange }) => {
  return (
    <>
      <select name={name} onChange={onChange}>
        {selectListValues.map((option, index) => {
          return (
            <React.Fragment key={index}>
              <option value={option?.label}>{option?.value}</option>
            </React.Fragment>
          );
        })}
      </select>
      <br />
    </>
  );
};

export default DropDownMenu;
