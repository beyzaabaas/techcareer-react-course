import React from "react";

function ObjectArraySample() {
  let webUsers = [
    {
      name: "Beyza",
      surname: "Baş",
      onlineStatus: false,
    },
    {
      name: "Verda",
      surname: "Baş",
      onlineStatus: true,
    },
    {
      name: "Göksel",
      surname: "Baş",
      onlineStatus: false,
    },
    {
      name: "Melek",
      surname: "Aylanşık",
      onlineStatus: false,
    },
  ];
  //Eğer kullanıcının durumu true ise o satır KIRMIZI olsun
  return (
    <>
      <table>
        <tr>
          <td>Name</td>
          <td>Surname</td>
          {/* <td>Status</td> */}
        </tr>
        {webUsers.map((item, key) => {
          if (item.onlineStatus === true) {
            return (
              <tr style={{ color: "tomato" }}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                {/* <td>{item.onlineStatus.toString()}</td> */}
              </tr>
            );
          } else {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                {/* <td>{item.onlineStatus.toString()}</td> */}
              </tr>
            );
          }
        })}
      </table>
    </>
  );
}

export default ObjectArraySample;
