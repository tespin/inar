import './CheckboxList.css';
import React from 'react';
import Checkbox from './Checkbox';

const CheckboxList = (props) => {
    return (
        <div className="checkbox-list">
            {
                props.checkboxes.map( (checkbox, index) => {
                    const propsObj = {
                        key: checkbox.id,
                        label: checkbox.label,
                        onChecked: props.onCboxAdded
                    }

                    if (index === 3) {
                        return (
                            <div key={checkbox.id} className="marquee-box">
                                <Checkbox {...propsObj} classname="marquee"/>
                            </div>
                        );
                    }

                    if (index === 6) {
                        return (
                            <div key={checkbox.id} className="cbox7">
                                <Checkbox {...propsObj} label=""/>
                            </div>
                        )
                    }

                    if (index === 10) {
                        return (
                            <div key={checkbox.id} className="marquee-box">
                                <Checkbox {...propsObj} classname="marquee"/>
                            </div>
                        );
                    }

                    return (
                        <div key={checkbox.id}>
                            <Checkbox {...propsObj} />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default CheckboxList;