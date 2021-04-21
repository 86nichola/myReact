import React from "react";
import Wrapper from "./Wrapper";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> ({user.email})
    </div>
  );
}

function UserList({ users }) {
  return (
    <>
      {users.map((user) => {
        return (
          <>
            <User user={user} key={user.id} />
          </>
        );
      })}
    </>
  );
}

export default UserList;
