import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import {store} from './store';
=======
import store from './store';
>>>>>>> otabek0302

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
<<<<<<< HEAD
        <Provider  store={store}>
=======
        <Provider store={store}>
>>>>>>> otabek0302
            <App />
        </Provider>
    </BrowserRouter>
);

