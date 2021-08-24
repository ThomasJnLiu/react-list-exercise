import React, { useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [userInput, setUserInput] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    const results =
      await axios.get(`https://www.breakingbadapi.com/api/characters?name=${userInput}
    `);

    props.sendSearchResults(results);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
        type="text"
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
