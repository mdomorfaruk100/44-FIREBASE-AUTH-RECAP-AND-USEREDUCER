# 44-10 useReducer with action and payload

## useRef() hook is used to get input field data. we need to take return ob this method in a variable and pass the variable in input field ref={} props.

## for getting value of field we need to use value key of current key of ref variable.

### ===> import React, { useReducer, useRef } from 'react';
### ===> import { patientReducer, patientState } from '../../reducers/patientReducer';

### ===>const PatientManagement = () => {
### ===>    const nameRef = useRef();
### ===>    const [state, dispatch] = useReducer(patientReducer, patientState);
### ===>    const handleSubmit = event => {
### ===>        event.preventDefault();
### ===>        dispatch({
### ===>            type: 'ADD_PATIENT', 
### ===>            name: nameRef.current.value,
### ===>            id: state.patients.length + 1,
### ===>        });
### ===>        nameRef.current.value = '';
### ===>    }
### ===>
### ===>    return (
### ===>        <div>
### ===>            <h1>Patient Management: {state.patients.length}</h1>
### ===>            <form onSubmit={handleSubmit}>
### ===>                <input type="text" ref={nameRef}/>
### ===>            </form>
### ===>            {
### ===>                state.patients.map(pt => <li 
### ===>                key={pt.id}
### ===>                 onClick={()=>dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
### ===>                 >{pt.name}</li>)
### ===>             }
### ===>         </div>
### ===>     );
### ===> };

export default PatientManagement;