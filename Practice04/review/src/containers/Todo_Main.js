import React, { Component } from 'react';
import '../TodoApp.css';
import Input from "../components/Input";
import List from "../components/List"

class Todo_Main extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <section className="todo-app__main">
                <Input />
                <List />
            </section>
        );
    }
}

export default Todo_Main;