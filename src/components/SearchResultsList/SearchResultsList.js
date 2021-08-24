import React from "react";
import SearchResultsCard from "../SearchResultsCard/SearchResultsCard";

const SearchResultsList = (props) => {
  return (
    <div>
      {props.searchResults.length > 0 && (
        <ul>
          {props.searchResults.map((character) => (
            <SearchResultsCard character={character} key={character.char_id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResultsList;
