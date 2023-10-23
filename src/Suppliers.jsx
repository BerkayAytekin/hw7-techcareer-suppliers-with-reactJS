import React, { useState } from "react";
import { suppliersData } from "./data/dataSuppliers";

function Suppliers() {
  const [suppliers, setsuppliers] = useState(suppliersData);
  const deleteSuppliers = (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      var filteredSuppliers = suppliers.filter((q) => q.id != id);
      setsuppliers([...filteredSuppliers]);
    }
  };
  const order = () => {
    var orderList = [...suppliers].sort((a, b) => {
      return a.companyName.localeCompare(b.companyName);
    });
    setsuppliers([...orderList]);
  };

  return (
    <>
      <h1>Length:</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th onClick={() => order()}>Company Name</th>
            <th>Contact Price</th>
            <th>Contact Title</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td>
                  <button onClick={() => deleteSuppliers(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Suppliers;
