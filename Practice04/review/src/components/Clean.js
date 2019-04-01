import React, { Component } from 'react';
import '../TodoApp.css';

class Clean extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="todo-app__clean">
                <button id="todo-cleaner" state="hide">
                    Clear completed
                </button>
            </div>
        );
    }
}

export default Clean;