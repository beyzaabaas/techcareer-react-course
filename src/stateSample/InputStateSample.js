import React, { useState } from "react";

function InputStateSample() {
  //Inputtaki datayı almak için input üzerine bir state bağlıyoruz.
  let metalBands = ["Moonspell", "Rotting Christ", "Furtherial"];
  const [metals, setMetals] = useState(metalBands);
  const [name, setName] = useState("");

  const newMetalBand = () => {
    setMetals([...metals, name]); //state her zaman yeni bir eleman verdiğinde değişir. referansın değişmesi operatörle alakalı ...
  };

  const remmoveBands = () => {
    setMetals([]);
  };

  return (
    <>
      <ul>
        {metals.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} //her inputa bastığımızda çalışır.
      ></input>
      <button onClick={() => newMetalBand()}>Add New Metal Band</button>
      <div>
        <button onClick={() => remmoveBands()}>Remove All Bands</button>
      </div>
    </>
  );
}

export default InputStateSample;
