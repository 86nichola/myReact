import React from "react";

function CreateUser({ username, email, onChange, onCreate, onDestroy }) {
  return (
    <>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
      <button onClick={onDestroy}>등록취소</button>
    </>
  );
}

export default CreateUser;
