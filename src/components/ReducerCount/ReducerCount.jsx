import { useReducer, useState } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
    if (action.type === 'increment') {
        const newState = {...state, count: state.count + 1};
        return newState;
    }
    return state;
}

const ReducerCount = () => {
    const [count, setCount] = useState(0);

    const [state, dispatch] = useReducer(reducer, initialState);
    const handleClick = () => {
        dispatch({ type: 'increment', payload: 'Hello' });
        setCount(count + 1);
    }
    console.log('re render', count);
    return (
        <div>
            <button onClick={handleClick}>Increase</button>
            <h1>This is Reducer Count: {state.count} | {count}</h1>
        </div>
    );
};

export default ReducerCount;