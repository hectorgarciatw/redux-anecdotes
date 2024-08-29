import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { voteAnecdote, createAnecdote } from "./actions";

const App = () => {
    const anecdotes = useSelector((state) => state);
    const dispatch = useDispatch();

    const [newAnecdote, setNewAnecdote] = useState("");

    // Dispatch a vote for the anecdote
    const vote = (id) => {
        dispatch(voteAnecdote(id));
    };

    // Creates a new anecdote
    const addAnecdote = (event) => {
        event.preventDefault();
        dispatch(createAnecdote(newAnecdote));
        setNewAnecdote(""); // Limpiar el campo después de agregar
    };

    // Sorting anecdote by ascending votes
    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

    return (
        <div>
            <h2>Anecdotes</h2>
            {sortedAnecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            ))}
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

export default App;
