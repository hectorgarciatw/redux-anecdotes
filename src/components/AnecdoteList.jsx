import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../actions";

const AnecdoteList = () => {
    const dispatch = useDispatch();
    const anecdotes = useSelector((state) => state.anecdotes);
    const filter = useSelector((state) => state.filter);

    // Filtering the anecdotes
    const filteredAnecdotes = anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()));

    // Ascending order
    const sortedAnecdotes = [...filteredAnecdotes].sort((a, b) => b.votes - a.votes);

    // Manages the votes
    const handleVote = (id) => {
        dispatch(voteAnecdote(id));
    };

    return (
        <div>
            <h2>Anecdotes</h2>
            {sortedAnecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes} votes
                        <button onClick={() => handleVote(anecdote.id)}>vote</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnecdoteList;
