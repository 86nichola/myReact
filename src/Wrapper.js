import React from "react";

function Wrapper({ children, bordercolor, backgroundColor }) {
  const style = {
    fontSize: "16px",
    border: `2px solid ${bordercolor}`,
    padding: "60px",
    marginTop: "1rem",
    marginBottom: "2rem",
    marginLeft: "30rem",
    marginRight: "30rem",
    backgroundColor: `${backgroundColor}`,
  };

  return <div style={style}>{children}</div>;
}
Wrapper.defaultProps = {
  bordercolor: "gray",
  backgroundColor: "white",
};
export default Wrapper;
