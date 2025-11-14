# 44-8 use useReducer for a simple case

## action type will be in uppercase
## action is a object with type and payload property. payload is option. if want to send data then use payload.

## dispatch method is used to send action to reducer. we need to pass action as param of dispatch.

### ==> import {useReducer} from 'react';
### ==> const initialState = {count: 0};
### ==> const reducer = (state, action) => {
### ==>    switch(action.type){
### ==>    case "INCREMENT":
### ==>        return {count: state.count + 1};
### ==>    case "DECREMENT":
### ==>        return {count: state.count - 1};
### ==>    default:
### ==>        return state;
### ==> }
### ==> }
### ==> const ReducerCount = () => {
### ==>    const [state, dispatch] = useReducer(reducer, initialState);
### ==>     return (
### ==>     <div>
### ==>        <h1>count: {state.count}</h1>
### ==>        <button onClick={()=>dispatch({type: 'INCREMENT'})}>Increment</button>
### ==>        <button onClick={()=>dispatch({type: 'DECREMENT'})}>Decrement</button>
### ==>    </div>
### ==> )
### ==> }
