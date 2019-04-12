import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Test } from './App';
import './vendor/bootstrap/css/bootstrap.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './css/agency.css';
import * as serviceWorker from './serviceWorker';

const index = ['Services', 'Portfolio', 'About', 'Team', 'Contact'];
const test = 123444444444444444444;
const services = { head: ['E-Commerce', 'Responsive Design', 'Web Security'], main: ['...', '...', '...'] };

// ReactDOM.render(<Navagation index={index} />);
ReactDOM.render(<App index={index} services={services} />, document.getElementById('root'));

// ReactDOM.render(<Test test={test} />, document.getElementById('test2'));
// console.log(Test);
// ReactDOM.hydrate(<Navigation index1={index1} />, document.getElementById('root'));
// ReactDOM.render(<Navagation index1={index1} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
