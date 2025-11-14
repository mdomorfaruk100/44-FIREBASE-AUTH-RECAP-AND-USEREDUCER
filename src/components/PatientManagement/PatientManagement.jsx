import React, { useReducer } from 'react';
import { patientReducer, patientState } from '../../reducers/patientReducer';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState);
    return (
        <div>
            <h1>Patient Management: {state.patients.length}</h1>
            <form action="">
                <input type="text" />
            </form>
        </div>
    );
};

export default PatientManagement;