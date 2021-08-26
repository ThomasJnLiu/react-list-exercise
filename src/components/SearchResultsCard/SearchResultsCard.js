import React from "react";
import classes from "./SearchResultsCard.module.css";

const SearchResultsCard = (props) => {
  return (
    <li className={classes["search-results-card"]}>
      <img src={props.character.img} alt={props.character.name} />
      <h2>{props.character.name}</h2>
      <button>Add to favourites</button>
    </li>
  );
};

export default SearchResultsCard;
