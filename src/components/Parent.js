import './Parent.css';
import React from 'react';
import Container from './Container';

class Parent extends React.Component {
    render() {
        return (
            <div className="parent">
                <Container />
            </div>
        );
    }
}

export default Parent;