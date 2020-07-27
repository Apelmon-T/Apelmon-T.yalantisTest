import React from "react";
import styled from "styled-components";

const Month = styled.div`
  font-family: "Poppins", sans-serif;
  border-radius: 20px;
  padding: 5px 20px;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);

  transition: background-color 0.7s;
`;

const defaultColor = "#000";

const MonthItem = ({ title, highlightColor, handleMouseOver, isHovered }) => {
  const backgroundColor = isHovered ? highlightColor : defaultColor;

  return (
    <Month style={{ backgroundColor }} onMouseOver={handleMouseOver}>
      {title}
    </Month>
  );
};

export default MonthItem;
