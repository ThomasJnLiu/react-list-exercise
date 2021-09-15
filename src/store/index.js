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
      console.log(action.payload.character);
      state.favouriteCharacters.push(action.payload.character);
    },
    removeChar(state, action) {
      console.log(action.payload.character);
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
