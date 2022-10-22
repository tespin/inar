import './Checkbox.css';
import React, { useState } from 'react';

const Checkbox = (props) => {
    const [wasChecked, setWasChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = (event) => {
        if (!wasChecked) {
            setWasChecked(true);
            props.onCboxChange(event);
        }
        // console.log(props.idx);
        // console.log(props.cboxes[props.idx]);
        const cboxes = props.cboxes;
        // cboxes[props.idx].checked = !(cboxes[props.idx].checked);
        cboxes[props.idx].checked = !(cboxes[props.idx].checked);
        console.log(`cbox ${props.idx} is ${cboxes[props.idx].checked ? 'checked' : 'unchecked'}`);
        props.setChecked([...cboxes]);
        // setIsChecked(event.target.checked);

        // if (props.selected) {
        //     props.selected.map( (checkbox) => {

        //     })
        // }
    }

    return (
        <div className={props.classname ? `cbox ${props.classname}` : 'cbox'}>
            <input 
                type="checkbox" 
                // checked={isChecked}
                checked={props.checked}
                onChange={handleOnChange}></input>
            <label htmlFor="cbox">{props.label}</label>
        </div>
    );
}

export default Checkbox;