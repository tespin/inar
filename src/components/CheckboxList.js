import './CheckboxList.css';
import React from 'react';
import Checkbox from './Checkbox';

const CheckboxList = (props) => {
    return (
        <div className="checkbox-list">
            {
                props.checkboxes.map( (checkbox, index) => {
                    const propsObj = {
                        idx: index,
                        id: checkbox.id,
                        label: checkbox.label,
                        checked: checkbox.checked,
                        cboxes: props.checkboxes,
                        setChecked: props.setChecked,
                        onCboxChange: props.onCboxChange
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
                            <div key={checkbox.id} className="cbox7 justified">
                                <Checkbox {...propsObj} label=""/>
                            </div>
                        )
                    }

                    if (index === 10) {
                        return (
                            <div key={checkbox.id} className="marquee-box">
                                <Checkbox {...propsObj} classname="marquee" selected={[7, 8, 9]}/>
                            </div>
                        );
                    }

                    if (index === 11) {
                        return (
                            <div key={checkbox.id} className="cbox12">
                                <Checkbox {...propsObj} classname="nocbox"/>
                            </div>
                        );
                    }

                    if (index === 12) {
                        return (
                            <div key={checkbox.id} className="cbox13 strikethrough">
                                <Checkbox {...propsObj}/>
                            </div>
                        );
                    }

                    if (index === 13) {
                        return (
                            <div key={checkbox.id} className="cbox14 red">
                                <Checkbox {...propsObj}/>
                            </div>
                        );
                    }

                    if (index === 15) {
                        return (
                            <div key={checkbox.id} className="cbox15 link">
                                <Checkbox {...propsObj}/>
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