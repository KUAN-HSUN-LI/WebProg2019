import React, { Component } from 'react';
import '../TodoApp.css';

class Category extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <button id={this.props.id} state={this.props.state}>
                {this.props.text}
            </button>
        );
    }
}

export default Category;