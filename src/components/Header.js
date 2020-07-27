import React, { useState } from "react";
import styled from "styled-components";

import GetUsersInfo from "./GetUsersInfo";
import MonthItem from "./MonthItem";

const Div = styled.div`
  font-family: "Poppins", sans-serif;

  .list-of-month {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;

    color: white;

    margin-top: 20px;
  }
`;

const Header = ({ months, users }) => {
  const [monthContent, setMonthContent] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // get users wich born in necessary month when mouth inside
  const getUsers = (index) => {
    const filteredUsers = users.filter((user) => {
      const userDateBorn = new Date(user.dob).getMonth();
      return userDateBorn === index;
    });

    setMonthContent(filteredUsers);
    setHoveredIndex(index);
  };

  // background-colors for months
  const getHighlightColor = (peopleBorn) => {
    if (peopleBorn < 3) return "#a8a8a8";
    if (peopleBorn < 7) return "#94a4eb";
    if (peopleBorn < 11) return "#79b574";

    return "#e66967";
  };

  return (
    <Div className="month-block">
      <div className="list-of-month">
        {months.map((month, index) => (
          <MonthItem
            title={month}
            highlightColor={getHighlightColor(monthContent.length)}
            handleMouseOver={getUsers.bind(null, index)}
            isHovered={hoveredIndex === index}
            key={month}
          />
        ))}
      </div>
      <GetUsersInfo monthContent={monthContent} />
    </Div>
  );
};

export default Header;
