import React from "react";

import App  from "./components/app/app";

import ReactDOM from 'react-dom';


import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from './reducer/reducer';

localStorage.setItem('isAdmin', false);

let store = createStore(Reducer);
console.log(store.getState());


ReactDOM.render(<Provider store={store}>

    <App /> 

</Provider>   ,document.getElementById('root'));