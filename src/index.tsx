import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { makeServer } from './api';
import Application from './components/application';
import './index.css';
import store from './store';

const environment = process.env.NODE_ENV;
makeServer({ environment });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
);
