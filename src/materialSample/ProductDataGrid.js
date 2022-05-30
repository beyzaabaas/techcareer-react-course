import { width } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

function ProductDataGrid() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => setProduct(res.data));
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "Product Id",
      width: 150,
    },
    {
      field: "name",
      headerName: "Product Name",
      width: 350,
    },
    {
      field: "unitPrice",
      headerName: "Price",
      width: 150,
    },
    {
      field: "unitsInStock",
      headerName: "Stock",
      width: 150,
    },
  ];
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          columns={columns}
          rows={product}
          pageSize={5}
          checkboxSelection
        ></DataGrid>
      </div>
    </>
  );
}

export default ProductDataGrid;
