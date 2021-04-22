import React, { useState } from "react";
import DefaultUsers from "./DefaultUsers";
import Wrapper from "./Wrapper";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> ({user.email})
    </div>
  );
}

function UserList({ users, onDefault }) {
  return (
    <>
      <div style={{ border: "2px solid green", padding: "3px" }}>
        <DefaultUsers onDefault={onDefault} />
      </div>

      <p />
      {users.map((user) => {
        return (
          <>
            <div style={{ border: "2px solid gray", padding: "3px" }}>
              <User user={user} key={user.id} />
            </div>
          </>
        );
      })}
    </>
  );
}

export default UserList;
