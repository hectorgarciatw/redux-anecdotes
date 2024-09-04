import { useSelector, useDispatch } from "react-redux";
import { voteAndNotify } from "../reducers/anecdoteSlice";
import { setFilter } from "../reducers/filterSlice";

const AnecdoteList = () => {
    const dispatch = useDispatch();
    const anecdotes = useSelector((state) => state.anecdotes);
    const filter = useSelector((state) => state.filter);

    const vote = (id) => {
        dispatch(voteAndNotify(id));
    };

    const filteredAnecdotes = anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()));

    const sortedAnecdotes = [...filteredAnecdotes].sort((a, b) => b.votes - a.votes);

    return (
        <div>
            {sortedAnecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes} votes
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnecdoteList;
