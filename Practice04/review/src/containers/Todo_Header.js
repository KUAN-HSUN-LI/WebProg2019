import React, { Component } from 'react';
import '../TodoApp.css';

class Todo_Header extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="todo-app__header">
                <h1 className="todo-app__title">
                    todos
                </h1>
            </div>
        );
    }
}

export default Todo_Header;