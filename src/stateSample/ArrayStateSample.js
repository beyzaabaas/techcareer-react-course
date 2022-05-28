import React, { useState } from "react";

function ArrayStateSample() {
  let cityList = ["İstanbul", "Ankara", "Diyarbakır", "Trabzon", "Eskişehir"];

  const [cities, setCityList] = useState(cityList);
  let loadCity = () => {
    setCityList(cityList);
  };
  return (
    <>
      <ul>
        {cities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setCityList([])}>Empty City</button>
      <button onClick={() => loadCity()}>Load City</button>
    </>
  );
}

export default ArrayStateSample;
