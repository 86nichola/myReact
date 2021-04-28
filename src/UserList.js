import React, { useState } from "react";
import DefaultUsers from "./DefaultUsers";
import Wrapper from "./Wrapper";

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      ({user.email})<button onClick={() => onRemove(user.id)}>del</button>
    </div>
  );
}

function UserList({ users, onDefault, onRemove, onToggle }) {
  return (
    <>
      <div style={{ border: "2px solid green", padding: "3px" }}>
        <DefaultUsers onDefault={onDefault} />
      </div>

      <p />
      {users.map((user) => {
        return (
          <>
            <div style={{ padding: "3px" }}>
              <div style={{ border: "2px solid gray", padding: "13px" }}>
                <User
                  user={user}
                  key={user.id}
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default UserList;
