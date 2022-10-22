import React, { useState } from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const initID = uuidv4().toString().slice(-4);
    const [cboxArray, setCboxArray] = useState([{
        id: initID,
        label: "I'm not a robot"
    }]);

    const generateID = () => {
        return uuidv4().toString().slice(-8);
    }

    const handleCboxAdded = (event) => {
        const newID = generateID();
        setCboxArray((prevCheckboxes) => {
            console.log(prevCheckboxes);
            return [...prevCheckboxes, {id: newID, label: "I'm not a robot"}]
        })
    }

    return (
        <Card checkboxes={cboxArray} onCboxAdded={handleCboxAdded} />
    );
}

export default App;