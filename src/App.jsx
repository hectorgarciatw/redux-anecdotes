import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { voteAnecdote, createAnecdote } from "./actions";

// Components
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";

const App = () => {
    const anecdotes = useSelector((state) => state);
    const dispatch = useDispatch();

    const [newAnecdote, setNewAnecdote] = useState("");

    // Creates a new anecdote
    const addAnecdote = (event) => {
        event.preventDefault();
        dispatch(createAnecdote(newAnecdote));
        setNewAnecdote("");
    };

    return (
        <div>
            <h2>Anecdotes</h2>
            <Filter />
            <AnecdoteList />
            <AnecdoteForm />
        </div>
    );
};

export default App;
