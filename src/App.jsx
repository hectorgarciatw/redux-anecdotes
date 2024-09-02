import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

// Actions creators
import { voteAnecdote, createAnecdote } from "./reducers/anecdoteSlice";

// Components
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";

const App = () => {
    const anecdotes = useSelector((state) => state.anecdotes);
    const dispatch = useDispatch();

    const [newAnecdote, setNewAnecdote] = useState("");

    // Creates a new anecdote
    const addAnecdote = (event) => {
        event.preventDefault();
        dispatch(createAnecdote(newAnecdote));
        setNewAnecdote("");
    };

    const handleVote = (id) => {
        dispatch(voteAnecdote(id));
    };

    return (
        <div>
            <h2>Anecdotes</h2>
            <Filter />
            <AnecdoteList anecdotes={anecdotes} onVote={handleVote} />
            <AnecdoteForm addAnecdote={addAnecdote} newAnecdote={newAnecdote} setNewAnecdote={setNewAnecdote} />
        </div>
    );
};

export default App;
