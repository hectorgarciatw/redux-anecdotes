import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../actions";

const AnecdoteForm = () => {
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
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input value={newAnecdote} onChange={(e) => setNewAnecdote(e.target.value)} />
                </div>
                <button type="submit">create</button>
            </form>
        </div>
    );
};

export default AnecdoteForm;
