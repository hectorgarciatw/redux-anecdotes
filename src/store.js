import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./reducers/anecdoteSlice";
import filterReducer from "./reducers/filterSlice";

// Configurar el store con los reducers combinados
const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterReducer,
    },
});

export default store;
