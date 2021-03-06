import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/GlobalStyles.css'
import'@fontsource/poppins';
import'@fontsource/poppins/500.css';
import'@fontsource/poppins/600.css';
import'@fontsource/poppins/700.css';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
