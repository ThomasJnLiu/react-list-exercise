import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialFavouritesState = { counter: 0, favouriteCharacters: [] };

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: initialFavouritesState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    addChar(state, action) {
      if (
        state.favouriteCharacters.some(
          (character) => character.char_id === action.payload.character.char_id
        )
      ) {
        console.log("character already added");
      } else {
        state.favouriteCharacters.push(action.payload.character);
      }
    },
    removeChar(state, action) {
      state.favouriteCharacters = state.favouriteCharacters.filter(
        (character) => character.char_id !== action.payload.character.char_id
      );
    },
  },
});

const store = configureStore({
  reducer: { favourites: favouritesSlice.reducer },
});

export default store;
export const favActions = favouritesSlice.actions;
