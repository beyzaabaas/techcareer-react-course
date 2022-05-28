import React, { useState } from "react";

function StateSample() {
  //     //Eğer senin bir değişkenin element üzerinde herhangi bir fonksiyonla değiştiğinde htmlninde değişmesini istiyorsan state kullanmalasın.
  //   let name = "Beyza";

  //   const changeName = () => {
  //     name = "Verda";
  //   };

  const [name, setName] = useState("Beyza"); //name değişkeni useState içerisinde bulunan değer setName ise use state yerine gelecek değer.
  //Eğer name isimli değişkeni useState kavramı ile değişkeni değiştirmek istersek StateSample fonksiyonu tekrar çalışır.

  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => setName("Verda")}>Change Name</button>
    </>
  );
}

export default StateSample;
