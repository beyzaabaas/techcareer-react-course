import React, { useState } from "react";
import { categories } from "../data/categories";

function CategoryTable() {
  const [categoryList, setCategoryList] = useState(categories);
  const [searchByName, setSearchByName] = useState("");

  const removeAll = () => {
    setCategoryList([]);
  };

  const removeItem = (id) => {
    let newCategoryList = categoryList.filter((item) => item.id !== id);
    setCategoryList(newCategoryList);
  };

  const searchCategories = (data) => {
    let searchData = data.toLowerCase().trim();
    let newCategories = categories.filter((q) =>
      q.name.toLowerCase().includes(searchData)
    ); //filtreleme işlemini sabit data üzerinden yaptık
    setCategoryList(newCategories);
  };
  const orderBy = () => {
    let sortCategories = categoryList.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setCategoryList([...sortCategories]);
  };
  const orderByDesc = () => {
    let sortCategories = categoryList.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fb < fa) {
        return -1;
      }
      if (fb > fa) {
        return 1;
      }
      return 0;
    });
    setCategoryList([...sortCategories]);
  };

  const loadData = () => {
    setCategoryList(categories);
  };

  return (
    <>
      <div>
        <input
          onChange={(e) => searchCategories(e.target.value)}
          placeholder="search by name..."
        ></input>
        <div>
          <button onClick={() => orderBy()}>Order By</button>
          <button onClick={() => orderByDesc()}>Order By Desc</button>
          <button onClick={() => loadData()}>Load Data</button>
        </div>
      </div>

      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Description</td>
        </tr>

        {categoryList &&
          categoryList.map((item, key) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </td>
              </tr>
            );
          })}
      </table>
      <div>
        <button onClick={() => removeAll()}>Remove All</button>
      </div>
    </>
  );
}

export default CategoryTable;
