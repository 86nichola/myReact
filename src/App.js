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
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
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
  const onRemove = (id) => {
    setUsers(
      users.filter((o) => {
        return o.id !== id;
      })
    );
  };
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  return (
    <>
      <div>
        <Hello name="react" color="red" isSpecial />
        <Hello color="pink" />
        <Counter />
        <br />
        <InputSample />
      </div>
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
        <UserList
          users={users}
          onDefault={onDefault}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      </Wrapper>
    </>
  );
}

export default App;
