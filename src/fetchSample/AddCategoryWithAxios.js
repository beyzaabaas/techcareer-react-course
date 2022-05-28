import React, { useState } from "react";

function AddCategoryWithAxios() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  let addNewCategory = () => {
    let newCategory = {
      name: name,
      description: description,
    };
    console.log(newCategory);
  };
  return (
    <>
      <div>
        <label>Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={() => addNewCategory()}>Add</button>
      </div>
    </>
  );
}

export default AddCategoryWithAxios;