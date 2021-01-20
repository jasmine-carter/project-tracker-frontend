import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'; //allows us to create store, incoroporates thunk with store, allows to combine middlewares/chain them
import thunk from 'redux-thunk'; //allows async requests
import { Provider } from 'react-redux'; //Any component wrapped in Provider will have access to Redux store
import projectReducer from './reducers/projectReducer'


import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(projectReducer, composeEnhancers(applyMiddleware(thunk)));
//reducer responsible for receiving actions, interpreting them, and adjusting store based on them



ReactDOM.render(
  <Provider store={store} >
  <App />
  </Provider>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
