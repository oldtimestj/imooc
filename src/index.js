import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AppRouter from './test'
// import Admin from './Admin'
// import Home from './pages/route_demo/router1/Home'
import Router from './router'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
