import React, { Component } from 'react';
import Calculator from '../Calculator/Calculator';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Calculator /> 
            </div>
        );
    }
}

export default App;
