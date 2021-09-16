import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { favActions } from "../store";
import { useHistory, useLocation } from "react-router-dom";

const Favourites = () => {
  const location = useLocation();
  console.log(location);

  const favourites = useSelector(
    (state) => state.favourites.favouriteCharacters
  );
  const dispatch = useDispatch();

  const history = useHistory();

  // pass search param to constructor to extract into object
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const changeSorting = () => {
    history.push("/favourites?sort=" + (isSortingAscending ? "desc" : "asc"));
  };

  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.name > quoteB.name ? 1 : -1;
      } else {
        return quoteA.name < quoteB.name ? 1 : -1;
      }
    });
  };

  const tempChars = [...favourites];
  sortQuotes(tempChars, isSortingAscending);

  // const sortedChars = sortQuotes(tempChars, isSortingAscending);
  // console.log(sortedChars);

  return (
    <div>
      <h1>Favourites Page</h1>
      {favourites.length > 0 && (
        <div>
          <div>
            <button onClick={changeSorting}>
              Sort {isSortingAscending ? "Descending" : "Ascending"}{" "}
            </button>
          </div>
          {tempChars.map((char) => (
            <p key={char.char_id}>
              {char.name}{" "}
              <button
                onClick={() => {
                  dispatch(favActions.removeChar({ character: char }));
                }}
              >
                Remove Character
              </button>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
