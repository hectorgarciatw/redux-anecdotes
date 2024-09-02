import { useState } from "react";

const AnecdoteForm = ({ addAnecdote }) => {
    const [newAnecdote, setNewAnecdote] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newAnecdote.trim() !== "") {
            addAnecdote(newAnecdote);
            setNewAnecdote("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newAnecdote} onChange={({ target }) => setNewAnecdote(target.value)} />
            <button type="submit">Create</button>
        </form>
    );
};

export default AnecdoteForm;
