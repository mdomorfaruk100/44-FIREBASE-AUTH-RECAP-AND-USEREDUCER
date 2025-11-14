# 44-7 a simple introduction of useReducer 

## useReducer is a hook from react. it's first param is reducer callback function. second param is initial state. This hook returns currentState and dispatch method as a array. we also declear initial state and reducer function outside of component function.

## reducer callback function has 2 args. 1st is current state and 2nd is dispatch action. we return a updated state form this function.

### Action is used to update state on redux store. It's a object with type and payload. in type we will give action type. in payload we will give any data to reducer.
### When we dispatch a action when the action call the reducer function and reducer function change the state according action. and return the updated state. 

### ==> import {useReducer} from 'react';
### ==> const initialState = {count: 0};
### ==> const reducer = (state, action) => {

### ==> }
### ==> const ReducerCount = () => {
### ==>    const [state, dispatch] = useReducer(reducer, initialState);
### ==> }
