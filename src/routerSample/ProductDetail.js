import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log("Web Api Error", err));
  }, []);
  return (
    <>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Unit Price: {product.unitPrice}</p>
      <p>Stock: {product.unitsInStock}</p>
    </>
  );
}
export default ProductDetail;
