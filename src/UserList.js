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
            <div style={{ padding: "3px" }}>
              <div style={{ border: "2px solid gray", padding: "13px" }}>
                <User user={user} key={user.id} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default UserList;
