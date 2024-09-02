// For the vote anecdote
export const voteAnecdote = (id) => {
    return {
        type: "VOTE",
        data: { id },
    };
};

// For the anecdote create
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

export const setFilter = (filter) => {
    return {
        type: "SET_FILTER",
        data: filter,
    };
};

// ID generator
const getId = () => (100000 * Math.random()).toFixed(0);
