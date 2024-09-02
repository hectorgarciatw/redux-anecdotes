import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterSlice"; // Importa la nueva acción

const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const filterValue = event.target.value;
        dispatch(setFilter(filterValue));
    };

    const style = {
        marginBottom: 10,
    };

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    );
};

export default Filter;
