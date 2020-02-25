import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import rootReducer from './rootReducer';

let composeEnhancer = '';
if(process.env.NODE_ENV === 'development')
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
else
    composeEnhancer = compose;

const middlewares = [thunk];
if(process.env.NODE_ENV==='development')
    middlewares.push(logger);
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)));

export default store;