import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {compose, createStore} from "redux";
import { rootReducer } from './redux/rootReduser'
import {Provider} from "react-redux";

const store = createStore(rootReducer, compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = ( <Provider store={store}>
    <App />
</Provider>)

ReactDOM.render(app, document.getElementById('root'));

