import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { favActions } from "../store";

const Favourites = () => {
  const favourites = useSelector(
    (state) => state.favourites.favouriteCharacters
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Favourites Page</h1>
      {favourites.length > 0 && (
        <div>
          {favourites.map((char) => (
            <p key={char.char_id}>{char.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
