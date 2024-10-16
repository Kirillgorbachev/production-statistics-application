import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {Provider} from "react-redux";
import store from './app/store';
import { persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
    
);

