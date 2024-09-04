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
            const id = action.payload;
            const anecdoteToChange = state.find((anecdote) => anecdote.id === id);
            if (anecdoteToChange) {
                anecdoteToChange.votes += 1;
            }
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
        const response = await axios.patch(`http://localhost:3001/anecdotes/${id}`, {
            votes: anecdote.votes + 1,
        });
        dispatch(voteAnecdote(response.data.id));
        dispatch(setNotification("You voted for an anecdote"));

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
