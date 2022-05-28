import React from "react";

function IfElseSample() {
  let onlineStatus = true;

  return (
    <>
      {
        /* //Bir jsx elementinini içerisine javascript yazacaksak scope açıyoruz. */
        onlineStatus === true ? (
          <p>User Online!</p>
        ) : (
          /*Değilse demek*/ <p>User Offline!</p>
          //   javascriptte üç eşittir ile iki eşittir arasındaki fark değer ve tip eşitliği
        )
      }
    </>
  );
}

export default IfElseSample;
