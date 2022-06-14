import React, { forwardRef } from "react";

function Title(props, ref) {
  return <h1 ref={ref}>Beyza Baş</h1>;
}

export default forwardRef(Title);
