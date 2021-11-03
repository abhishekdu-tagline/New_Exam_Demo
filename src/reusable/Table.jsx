import React from "react";

const Table = ({ cols, tableData }) => {
  console.log("cols is ", cols);
  console.log("tableData is ", tableData);

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
            return (
              <tr key={index}>
                {cols.map((col, index) => (
                  <>
                    <td key={index}>{item[col.name]}</td>
                  </>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
