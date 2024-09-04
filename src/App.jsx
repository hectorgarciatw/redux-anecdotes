import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initializeAnecdotes, createAndNotify, voteAndNotify } from "./reducers/anecdoteSlice";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeAnecdotes());
    }, [dispatch]);

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
