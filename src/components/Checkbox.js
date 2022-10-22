import './Checkbox.css';
import React, { useState } from 'react';

const Checkbox = (props) => {
    const [wasChecked, setWasChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChecked = (event) => {
        if (!wasChecked) {
            setWasChecked(true);
            props.onChecked(event);
        }

        setIsChecked(event.target.checked);
    }

    return (
        <div className={props.classname ? `cbox ${props.classname}` : 'cbox'}>
            <input 
                type="checkbox" 
                id={props.id} 
                checked={isChecked}
                onChange={handleOnChecked}></input>
            <label htmlFor="cbox">{props.label}</label>
        </div>
    );
}

export default Checkbox;