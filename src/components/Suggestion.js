import React, { useState } from "react";
import styled from "styled-components";

const Suggestion = (props) => {
  const { suggestion, value, category } = props;
  const indexCut = suggestion.toLowerCase().indexOf(value.toLowerCase());
  const lastCut = indexCut + value.length;
  const secondHalf = suggestion.slice(lastCut);
  const firstHalf = suggestion.slice(0, lastCut);

  return (
    <SuggestionsBox>
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

  &:hover {
    cursor: pointer;
    background: cornsilk;
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
