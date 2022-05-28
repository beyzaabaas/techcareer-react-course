import React from "react";

function ObjectSample() {
  let user = {
    name: "Bruce",
    surname: "Dickonson",
    group: {
      //nested obje
      name: "Iron Maiden",
      country: "U.K.",
    },
  };
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Surnmae:{user.surname}</p>
      <p>Group:{user.group.name.toUpperCase()}</p>
      <p>Country:{user.group.country}</p>
    </div>
  );
}

export default ObjectSample;
