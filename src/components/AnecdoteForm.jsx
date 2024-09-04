import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAndNotify } from "../reducers/anecdoteSlice";

const AnecdoteForm = () => {
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const addAnecdote = (event) => {
        event.preventDefault();
        dispatch(createAndNotify(content));
        setContent("");
    };

    return (
        <form onSubmit={addAnecdote}>
            <div>
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter your anecdote" />
            </div>
            <button type="submit">Create</button>
        </form>
    );
};

export default AnecdoteForm;
