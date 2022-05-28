import React from "react";

//js'de functionlarda aynı obje gibi hareket edebilirler.
function PropClickEventSample(props) {
  return (
    <>
      <button onClick={() => props.hello()}>Hello pprops!</button>
    </>
  );
}

export default PropClickEventSample;
