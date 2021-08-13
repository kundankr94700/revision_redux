import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers} from 'redux';//combine reducers in order to add multiple reducers in a single store
import allReducers from "./Reducer/index"
import {Provider} from "react-redux";

const store=createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <h1 style={{textAlign:'center',margin:'2rem'} }> Redux-Revision</h1>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);