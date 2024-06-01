import { createSlice, configureStore } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    languageCode: "EN",
  },
  reducers: {
    setEnglish: (state) => {
      state.languageCode = "EN";
    },
    setSpanish: (state) => {
      state.languageCode = "SP";
    },
    setFarsi: (state) => {
      state.languageCode = "FA";
    },
  },
});

export const { setEnglish, setSpanish, setFarsi } = languageSlice.actions;

const store = configureStore({
  reducer: languageSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(setEnglish());
// {languageCode: 1}
// store.dispatch(incremented());
// {languageCode: 2}
// store.dispatch(decremented());
// {languageCode: 1}
