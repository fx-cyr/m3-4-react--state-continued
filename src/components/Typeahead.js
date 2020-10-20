import React, { useState } from "react";
import styled from "styled-components";
import Suggestion from "./Suggestion";

const Typeahead = (props) => {
  const { handleSelect, suggestions, categories } = props;
  const [value, setValue] = useState("");
  const matches = suggestions.filter((suggestion) => {
    const lowerCaseTitle = suggestion.title.toLowerCase();
    const lowerCaseValue = value.toLowerCase();
    const isMatched = lowerCaseTitle.includes(lowerCaseValue);
    console.log(categories);
    if (lowerCaseValue.length >= 2) {
      return isMatched;
    }
  });

  return (
    <>
      <Wrapper>
        <SearchBar
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              alert(value);
            }
          }}
          placeholder="Search"
        />
        <ClearButton onClick={() => setValue("")}>Clear</ClearButton>
        {matches.length > 0 ? (
          <Suggestions>
            {matches.map((match) => {
              const category = categories[match.categoryId];
              return (
                <Suggestion
                  category={category}
                  value={value}
                  suggestion={match.title}
                  onClick={() => {
                    handleSelect(match.title);
                  }}
                />
              );
            })}
          </Suggestions>
        ) : null}
      </Wrapper>
    </>
  );
};

const SearchBar = styled.input`
  border: 1px solid #d1d1d1;
  border-radius: 3px;
  padding: 8px;
`;

const Wrapper = styled.div`
  margin: 10px;
`;
const ClearButton = styled.button`
  border: 0px solid;
  margin-left: 5px;
  border-radius: 3px;
  padding: 8px;
  background: blue;
  color: white; ;
`;

const Suggestions = styled.ul`
  border-radius: 6px;
  box-shadow: 0px 6px 24px -3px rgba(0, 0, 0, 0.52);

  width: 500px;
  padding: 18px;
`;

export default Typeahead;
