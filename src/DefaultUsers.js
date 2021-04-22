import React from "react";

function DefaultUsers({ onDefault }) {
  return (
    <>
      <button onClick={onDefault}>기본값 복원</button>
    </>
  );
}

export default DefaultUsers;
