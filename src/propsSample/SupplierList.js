import React, { useState } from "react";
import { suppliers } from "../data/suppliers";
import SuppliersItem from "./SuppliersItem";

function SupplierList() {
  const [supplierList, setSupplierList] = useState(suppliers);

  const deleteItem = (id) => {
    let newSuppliers = supplierList.filter((q) => q.id != id);
    setSupplierList(newSuppliers);
  };
  return (
    <>
      {supplierList &&
        supplierList.map((item, key) => {
          return (
            <SuppliersItem
              supplier={item}
              deleteItem={deleteItem}
            ></SuppliersItem>
          );
        })}
    </>
  );
}

export default SupplierList;
