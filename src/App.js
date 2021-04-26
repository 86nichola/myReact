import React, { useState, useRef } from "react";
import "./App.css";
import Hello from "./Hello.js";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "red",
    color: "aqua",
    fontSize: "24",
    padding: "1rem",
  };
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const defaultUsers = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];
  const [users, setUsers] = useState(defaultUsers);
  const nextId = useRef("4");
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setInputs({ username: "", email: "" });
    nextId.current += 1;
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const onDestroy = () => {
    users.pop();
    setUsers([...users]);
  };
  const onDefault = () => {
    debugger;
    setUsers([...defaultUsers]);
  };

  return (
    <>
      <div style={{ display: "inline-block" }}>
        <Wrapper bordercolor="red">
          <Hello name="react" color="red" isSpecial />
          <Hello color="pink" />
          <Counter />
          <br />
          <InputSample />
        </Wrapper>
        <Wrapper bordercolor="red">
          <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
            onDestroy={onDestroy}
          />
        </Wrapper>
        <Wrapper>
          <UserList users={users} onDefault={onDefault} />
        </Wrapper>
      </div>
    </>
  );
}

export default App;
