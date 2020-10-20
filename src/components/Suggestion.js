import React, { useState } from "react";
import styled from "styled-components";

const Suggestion = (props) => {
  const { suggestion, value, category, isSelected } = props;
  const indexCut = suggestion.toLowerCase().indexOf(value.toLowerCase());
  const lastCut = indexCut + value.length;
  const secondHalf = suggestion.slice(lastCut);
  const firstHalf = suggestion.slice(0, lastCut);

  return (
    <SuggestionsBox
      isSelected={isSelected}
      onClick={() => alert(`${firstHalf}${secondHalf}`)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          alert(`${firstHalf}${secondHalf}`);
        }
      }}
    >
      {firstHalf}
      <span>
        <Prediction>{secondHalf}</Prediction>
      </span>
      <span>
        <Category> in {category.name}</Category>
      </span>
    </SuggestionsBox>
  );
};

const SuggestionsBox = styled.li`
  padding: 5px 0;
  background: ${(props) => (props.isSelected ? "cornsilk" : "white")};

  &:hover {
    cursor: pointer;
    background: cornsilk;
  }

  &:focus {
    cursor: pointer;
    background: red;
  }
`;

const Prediction = styled.span`
  font-weight: bolder;
`;

const Category = styled.span`
  font-size: 12px;
  color: darkmagenta;
  font-style: italic;
`;

export default Suggestion;
