import React, { Component } from 'react';
import '../TodoApp.css';

class List extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <ul className="todo-app__list" id="todo-list">
                </ul>
        );
    }
}

export default List;