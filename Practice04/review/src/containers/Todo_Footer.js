import React, { Component } from 'react';
import '../TodoApp.css';
import Category from "../components/Category"
import Total from "../components/Total";
import Clean from "../components/Clean";

class Todo_Footer extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <footer className="todo-app__footer" id="todo-footer">
                <Total last={this.props.last}/>
                <ul className="todo-app__view-buttons">
                    <Category text="All" id="todo-viewall" state="active" />
                    <Category text="Active" id="todo-viewactive" state="inactive" />
                    <Category text="Completed" id="todo-viewcompleted" state="inactive" />
                </ul>
                <Clean />
            </footer>
        );
    }
}

export default Todo_Footer;