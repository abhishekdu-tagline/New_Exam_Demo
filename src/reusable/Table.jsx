import React from "react";
import ButtonMapping from "./ButtonMapping";

const Table = ({ cols, tableData, buttonAttributes }) => {
  // console.log("cols is ", cols);
  // console.log("tableData is ", tableData);

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            {cols.map((col, index) => {
              return (
                <>
                  <th key={index}>{col.label}</th>
                </>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {tableData.map((item, index) => {
            console.log(`item is `, item);
            return (
              <tr key={index}>
                {cols.map((col, index) => (
                  <React.Fragment key={index}>
                    <td key={index}>{item[col.name]}</td>
                  </React.Fragment>
                ))}
                <td>
                  <ButtonMapping
                    buttonAttributes={buttonAttributes}
                    id={item._id}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
