import './CheckboxList.css';
import React from 'react';
import Checkbox from './Checkbox';

const CheckboxList = (props) => {
    return <div className="checkbox-list">
        {
            props.checkboxes.map( (checkbox) => (
                <Checkbox key={checkbox} label="I'm not a robot" onChecked={props.onCboxAdded} />
            ))
        }
        </div>
};

export default CheckboxList;