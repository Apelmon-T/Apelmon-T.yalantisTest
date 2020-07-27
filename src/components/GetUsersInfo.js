import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  margin: 40px;
  font-size: 0.9em;
  width: 90%;
  padding: 0;

  .users-item {
    display: flex;
    list-style-type: none;
    margin-bottom: 15px;
    border-bottom: 1px solid #a8a8a8;
  }

  .users-index {
    width: 3em;
  }

  .users-firstName {
    width: 7em;
  }

  .users-lastName {
    width: 7em;
  }
`;

const getUsersInfo = ({ monthContent }) => {
  return (
    <Ul className="users-block">
      {monthContent.map((user, index) => (
        <>
          <li className="users-item" key={user.id}>
            <div className="users-index">{index + 1}.</div>
            <div className="users-firstName">{user.firstName}</div>
            <div className="users-lastName">{user.lastName}</div>
            <div className="users-date">{new Date(user.dob).toString()}</div>
          </li>
        </>
      ))}
    </Ul>
  );
};

export default getUsersInfo;
