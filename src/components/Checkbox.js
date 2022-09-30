import React from 'react';

class Checkbox extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" id="cbox" autoComplete="off"></input>
                <label htmlFor="cbox">{this.props.label}</label>
            </div>
        );
    }
}

export default Checkbox;