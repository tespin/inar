import React, { useState } from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const initKey = uuidv4().toString().slice(-8);
    const [cboxArray, setCboxArray] = useState([{
        id: initKey,
        label: "I'm not a robot",
        checked: false
    }]);

    const generateKey = () => {
        return uuidv4().toString().slice(-8);
    }

    const handleCboxChange = (event) => {
        const newKey = generateKey();
        setCboxArray((prevCheckboxes) => {
            const updatedCbox = [...prevCheckboxes];
            return [...prevCheckboxes, { id: newKey, label: "I'm not a robot", checked: false}];
        })
    }

    const handleSetChecked = (cboxes) => {
        setCboxArray((prev) => {
            return [...prev];
        })
    }

    return (
        <Card checkboxes={cboxArray} onCboxChange={handleCboxChange} setChecked={handleSetChecked} />
    );
}

export default App;