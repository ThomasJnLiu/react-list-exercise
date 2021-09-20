import React from "react";
import SearchResultsCard from "../SearchResultsCard/SearchResultsCard";
import { Layout } from "@shopify/polaris";
import classes from "./SearchResultsList.module.css";
const SearchResultsList = (props) => {
  return (
    <Layout>
      {props.searchResults.length > 0 && (
        <Layout.Section>
          <div className={classes["search-results-container"]}>
            {props.searchResults.map((character) => (
              <SearchResultsCard
                character={character}
                key={character.char_id}
              />
            ))}
          </div>
        </Layout.Section>
      )}
    </Layout>
  );
};

export default SearchResultsList;
