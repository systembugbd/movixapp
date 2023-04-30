import { createSlice } from "@reduxjs/toolkit";

//defained initial state
const initialState = {
      url: {},
      genres: {},
};

//create slice for home page
const homeSlice = createSlice({
      name: "home",
      initialState,
      reducers: {
            getApiConfiguration: (state, action) => {
                  state.url = action.payload;
            },

            getApiGenres: (state, action) => {
                  state.genres = action.payload;
            },
      },
});

//Export reducer actions
export const { getApiConfiguration, getApiGenres } = homeSlice.actions;

//Export Reducer
export default homeSlice.reducer;
