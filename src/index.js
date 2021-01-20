import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'; //allows us to create store, incoroporates thunk with store
import thunk from 'redux-thunk'; //allows async requests
import { Provider } from 'react-redux'; //Any component wrapped in Provider will have access to Redux store

import App from './App';


//set up store

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
