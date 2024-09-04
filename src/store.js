import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./reducers/anecdoteSlice";
import notificationReducer from "./reducers/notificationSlice";
import filterReducer from "./reducers/filterSlice";

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        notifications: notificationReducer,
        filter: filterReducer,
    },
});

export default store;
