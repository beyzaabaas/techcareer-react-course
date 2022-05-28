import React, { useState } from "react";
import { suppliers } from "../data/suppliers";

function SupplierTable() {
  const [supplierTable, setSupplierTable] = useState(suppliers);

  const removeItem = (id) => {
    let newSupplierTable = supplierTable.filter((item) => item.id !== id);
    setSupplierTable(newSupplierTable);
  };

  // const removeAll = () => {
  //   setSupplierTable([]);
  // };

  // const searchSupplier = (data) => {
  //   let searchData = data.toLowerCase().trim();
  //   let newSupplier = suppliers.filter((q) =>
  //     q.name.toLowerCase().includes(searchData)
  //   ); //filtreleme işlemini sabit data üzerinden yapıyoruz.
  //   setSupplierTable(newSupplier);
  // };
  // const orderBy = () => {
  //   let sortSupplier = supplierTable.sort((a, b) => {
  //     let fa = a.name.toLowerCase(),
  //       fb = b.name.toLowerCase();

  //     if (fa < fb) {
  //       return -1;
  //     }
  //     if (fa > fb) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   setSupplierTable([...sortSupplier]);
  // };
  // const orderByDesc = () => {
  //   let sortSupplier = supplierTable.sort((a, b) => {
  //     let fa = a.name.toLowerCase(),
  //       fb = b.name.toLowerCase();

  //     if (fb < fa) {
  //       return -1;
  //     }
  //     if (fb > fa) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   setSupplierTable([...sortSupplier]);
  // };

  // const loadData = () => {
  //   setSupplierTable(suppliers);
  // };

  return (
    <>
      {/* <div>
        <input
          onChange={(e) => searchSupplier(e.target.value)}
          placeholder="search by name..."
        ></input>
        <div>
          <button onClick={() => orderBy()}>Order By</button>
          <button onClick={() => orderByDesc()}>Order By Desc</button>

          <div>
            <button onClick={() => loadData()}>Load Data</button>
            <button onClick={() => removeAll()}>Remove All</button>
          </div>
        </div>
      </div> */}

      <table>
        <tr>
          <td>Id</td>
          <td>Company Name</td>
          <td>Contact Name</td>
          <td>Contact Title</td>
        </tr>

        {supplierTable &&
          supplierTable.map((item, key) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </td>
              </tr>
            );
          })}
      </table>
    </>
  );
}

export default SupplierTable;
