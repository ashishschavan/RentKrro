import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = document.getElementById('root'); // Check if 'root' element exists
if (root) {
  ReactDOM.createRoot(root).render(
    <GoogleOAuthProvider clientId="561085562174-0oecrrmdp768gk6pl6sp7dmti68ldp30.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>

  );
} else {
  console.error("Target container 'root' not found in the DOM.");
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
