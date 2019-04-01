import React, { Component } from 'react';
import '../TodoApp.css';

class Input extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <input type="text" className="todo-app__input" placeholder="What needs to be done?" id="todo-input"/>
        );
    }
}

export default Input;