import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

const Search = ({ sendSearchResults }) => {
  const history = useHistory();
  const location = useLocation();
  const [userInput, setUserInput] = useState();

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("search");

  const submitHandler = async (event) => {
    event.preventDefault();
    history.push("/products?search=" + userInput);

    const results =
      await axios.get(`https://www.breakingbadapi.com/api/characters?name=${userInput}
    `);

    sendSearchResults(results);
  };

  useEffect(() => {
    if (query === null) {
      axios
        .get(
          `https://www.breakingbadapi.com/api/characters
`
        )
        .then((results) => {
          console.log(results);
          sendSearchResults(results);
        });
    } else {
      axios
        .get(
          `https://www.breakingbadapi.com/api/characters?name=${query}
`
        )
        .then((results) => {
          console.log(results);
          sendSearchResults(results);
        });
    }
  }, []);

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
