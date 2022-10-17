import React, { useState } from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const initID = uuidv4().toString().slice(-4);
    const [cboxArray, setCboxArray] = useState([initID]);

    const generateID = () => {
        return uuidv4().toString().slice(-4);
    }

    const handleCboxAdded = (event) => {
        setCboxArray((prevCheckboxes) => {
            return [...prevCheckboxes, generateID()]
        })
    }

    return (
        <Card checkboxes={cboxArray} onCboxAdded={handleCboxAdded} />
    );
}

export default App;