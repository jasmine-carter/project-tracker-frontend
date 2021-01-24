import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import projectReducer from './reducers/projectReducer.js'
import commentReducer from './reducers/commentReducer'


const reducer = combineReducers({
  projects: projectReducer,
  comments: commentReducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(projectReducer, composeEnhancers(applyMiddleware(thunk)));
//reducer responsible for receiving actions, interpreting them, and adjusting store based on them

export default store
