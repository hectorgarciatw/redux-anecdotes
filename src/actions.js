// For the vote anecdote process
export const voteAnecdote = (id) => {
    return {
        type: "VOTE",
        data: { id },
    };
};

// For the anecdote create process
export const createAnecdote = (content) => {
    return {
        type: "CREATE",
        data: {
            content,
            id: getId(),
            votes: 0,
        },
    };
};

// ID generator
const getId = () => (100000 * Math.random()).toFixed(0);
