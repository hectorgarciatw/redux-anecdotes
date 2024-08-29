import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { voteAnecdote, createAnecdote } from "./actions";

// Components
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";

const App = () => {
    const anecdotes = useSelector((state) => state);
    const dispatch = useDispatch();

    const [newAnecdote, setNewAnecdote] = useState("");

    // Creates a new anecdote
    const addAnecdote = (event) => {
        event.preventDefault();
        dispatch(createAnecdote(newAnecdote));
        setNewAnecdote(""); // Limpiar el campo después de agregar
    };

    return (
        <div>
            <h2>Anecdotes</h2>
            <AnecdoteList />
            <AnecdoteForm />
        </div>
    );
};

export default App;
