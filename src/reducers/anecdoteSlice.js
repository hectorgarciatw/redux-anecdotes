import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setNotification, clearNotification } from "./notificationSlice";

const anecdoteSlice = createSlice({
    name: "anecdotes",
    initialState: [],
    reducers: {
        setAnecdotes: (state, action) => {
            return action.payload;
        },
        voteAnecdote: (state, action) => {
            const updatedAnecdote = action.payload;
            return state.map((anecdote) => (anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote));
        },
        createAnecdote: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { setAnecdotes, voteAnecdote, createAnecdote } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
    return async (dispatch) => {
        const response = await axios.get("http://localhost:3001/anecdotes");
        dispatch(setAnecdotes(response.data));
    };
};

export const voteAndNotify = (id) => {
    return async (dispatch, getState) => {
        const anecdote = getState().anecdotes.find((anecdote) => anecdote.id === id);
        const updatedAnecdote = {
            ...anecdote,
            votes: anecdote.votes + 1,
        };
        const response = await axios.patch(`http://localhost:3001/anecdotes/${id}`, updatedAnecdote);

        dispatch(voteAnecdote(response.data));
        dispatch(setNotification(`You voted for '${response.data.content}'`));

        setTimeout(() => {
            dispatch(clearNotification());
        }, 5000);
    };
};

export const createAndNotify = (content) => {
    return async (dispatch) => {
        const response = await axios.post("http://localhost:3001/anecdotes", {
            content,
            votes: 0,
        });
        dispatch(createAnecdote(response.data));
        dispatch(setNotification("You created a new anecdote"));

        setTimeout(() => {
            dispatch(clearNotification());
        }, 5000);
    };
};

export default anecdoteSlice.reducer;
