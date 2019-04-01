import React, { Component } from 'react';
import '../TodoApp.css';

class Total extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="todo-app__total">
                <p id="todo-count">{this.props.last} left</p>
            </div>
        );
    }
}

export default Total;