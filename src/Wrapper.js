import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid orange",
    padding: "26px",
    margin: "30px",
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;
