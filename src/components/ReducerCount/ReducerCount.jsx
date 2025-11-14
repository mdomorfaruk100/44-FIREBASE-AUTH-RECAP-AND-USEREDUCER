import { useReducer, useState } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const ReducerCount = () => {
    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    const buttonStyle = {
        background: 'black',
        color: 'white',
        marginRight: '16px',
    }
    return (
        <div>
            <h1>This is Reducer Count: {state.count}</h1>
            <button style={buttonStyle} onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
            <button style={buttonStyle} onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </div>
    );
};

export default ReducerCount;