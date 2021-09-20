import React from "react";
import classes from "./SearchResultsCard.module.css";
import { useDispatch } from "react-redux";
import { favActions } from "../../store";
import { MediaCard } from "@shopify/polaris";

const SearchResultsCard = (props) => {
  const dispatch = useDispatch();
  const addFavChar = () => {
    dispatch(favActions.addChar({ character: props.character }));
  };
  return (
    <MediaCard
      title={props.character.name}
      size="small"
      primaryAction={{
        content: "Add Character to Favourites",
        onAction: addFavChar,
      }}
    >
      <img
        width="100%"
        height="100%"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={props.character.img}
        alt={props.character.name}
        Primar
      />
    </MediaCard>
    // <li className={classes["search-results-card"]}>
    //   <img src={props.character.img} alt={props.character.name} />
    //   <h2>{props.character.name}</h2>
    //   <button onClick={addFavChar}>Add to favourites</button>
    // </li>
  );
};

export default SearchResultsCard;
