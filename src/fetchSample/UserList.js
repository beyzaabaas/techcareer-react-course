import React, { useState, useEffect } from "react";
import UsersTable from "./UsersTable";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
    //apıdeki bodyi objeye çeviren kısım
    //bir fonksiyon .then anahtar kelimesi ile devam edebiliyorsa bu fonksiyon asenkron bir fonlsiyondur.
  }, []);

  const getData = () => {
    //Burada yaptığımız işlem oluşturulan fonksiyonda HTTP GET metodu ile veri çekme işlemi
    fetch("https://jsonplaceholder.typicode.com/users").then(
      (
        response //fetch default olarak GET isteği yapıyor.
      ) =>
        response
          .json()
          .then((data) => {
            setTimeout(() => {
              setUsers(data);
              setLoading(false);
            }, 2000);
          })
          .catch(() => {
            setLoading(false);
          })
    );
  };

  const removeUser = (id) => {
    //fetch ile web serwisten kullanıcı silinecek
    let requestOptions = {
      method: "DELETE",
    };
    fetch("https://northwind.vercel.app/api/categories/" + id, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        let newUsers = users.filter((q) => q.id !== id);
        setUsers(newUsers);
      });
  };

  return (
    <>
      {loading === true ? (
        <span>loading...</span>
      ) : (
        // <UsersTable users={users}></UsersTable>  //Bu kısmı seçenek olarak yaptık userstable adında bir prop oluşturduk ve aşağıdaki işlemi props vasıtası ile kullandık.
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>User Name</td>
              <td>E-mail</td>
            </tr>
          </thead>
          {users &&
            users.map((item, key) => {
              return (
                <tbody key={item.id}>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>
                      <button onClick={() => removeUser(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      )}
    </>
  );
}

export default UserList;
