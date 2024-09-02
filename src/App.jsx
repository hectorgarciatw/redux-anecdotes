import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { voteAndNotify, createAndNotify } from "./reducers/anecdoteSlice";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

const App = () => {
    const anecdotes = useSelector((state) => state.anecdotes);
    const dispatch = useDispatch();

    const handleCreateAnecdote = (content) => {
        dispatch(createAndNotify(content));
    };

    const handleVoteAndNotify = (id) => {
        dispatch(voteAndNotify(id));
    };

    return (
        <div>
            <Notification />
            <h2>Anecdotes</h2>
            <Filter />
            <AnecdoteList voteAnecdote={handleVoteAndNotify} />
            <AnecdoteForm addAnecdote={handleCreateAnecdote} />
        </div>
    );
};

export default App;
