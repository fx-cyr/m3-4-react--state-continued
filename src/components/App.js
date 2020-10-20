import React, { useState } from "react";
import data from "../data.js";
import Typeahead from "./Typeahead";
import GlobalStyles from "./GlobalStyles";

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Typeahead
        categories={data.categories}
        suggestions={data.books}
        handleSelect={(suggestion) => {
          window.alert(suggestion);
        }}
      />
    </>
  );
};

export default App;
