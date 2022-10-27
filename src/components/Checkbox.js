import './Checkbox.css';
import React, { useState } from 'react';

const Checkbox = (props) => {
    const [wasChecked, setWasChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = (event) => {
        const cboxes = props.cboxes;
        if (!wasChecked) {
            if (props.selected) {
                // uncheck selected checkboxes
                console.log(props.selected);
                props.selected.map( index => {
                    return cboxes[index].checked = !(cboxes[index].checked);
                })
            }
            props.onCboxChange(event);
            setWasChecked(true);
        }
        cboxes[props.idx].checked = !(cboxes[props.idx].checked);
        // console.log(`cbox ${props.idx} is ${cboxes[props.idx].checked ? 'checked' : 'unchecked'}`);
        // setIsChecked(event.target.checked);

        props.setChecked([...cboxes]);
    }

    return (
        <div className={props.classname ? `cbox ${props.classname}` : 'cbox'}>
            <input 
                type="checkbox" 
                id={props.id}
                checked={props.checked}
                onChange={handleOnChange}></input>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

export default Checkbox;