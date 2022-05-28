import React from "react";

//Proplar parenttan componente veri getirir.
//Bir child component dışarıdan aldığı propları içeriside kullanabilir.//Ya da bir üst componentinden veri alıyor.
function ProductDetail(props) {
  return (
    <>
      <div>
        <h1>Product Detail Page</h1>
      </div>
      <div>
        <p>Name:{props.name}</p>
        <p>Description:{props.description}</p>
        <p>Price:{props.price}</p>
      </div>
    </>
  );
}

export default ProductDetail;
