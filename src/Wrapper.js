import React from "react";

function Wrapper({ children, bordercolor }) {
  const style = {
    border: `2px solid ${bordercolor}`,
    padding: "26px",
    margin: "30px",
  };

  return <div style={style}>{children}</div>;
}
Wrapper.defaultProps = {
  bordercolor: "gray",
};
export default Wrapper;
