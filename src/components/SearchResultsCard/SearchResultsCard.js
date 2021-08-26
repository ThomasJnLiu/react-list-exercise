import React from "react";
import classes from "./SearchResultsCard.module.css";
import { useDispatch } from "react-redux";
import { favActions } from "../../store";

const SearchResultsCard = (props) => {
  const dispatch = useDispatch();
  const addFavChar = () => {
    dispatch(favActions.addChar({ character: props.character }));
  };
  return (
    <li className={classes["search-results-card"]}>
      <img src={props.character.img} alt={props.character.name} />
      <h2>{props.character.name}</h2>
      <button onClick={addFavChar}>Add to favourites</button>
    </li>
  );
};

export default SearchResultsCard;
