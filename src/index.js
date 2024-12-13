import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './router/route';
import { Provider } from 'react-redux';
import store from './states/configureStore';
import { AuthProvider } from './context/AuthContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  </Provider>
);


reportWebVitals();
