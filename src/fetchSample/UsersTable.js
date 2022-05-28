import React from "react";

function UsersTable() {
  return (
    <>
      ({/* UserList'in childi */}
      {/* <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>User Name</td>
            <td>E-mail</td>
          </tr>
        </thead>
        {prop.users &&
          props.users.map((item, key) => {
            return (
              <tbody key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
      ) */}
    </>
  );
}

export default UsersTable;
