import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
    <React.StrictMode>
    <App/>
    <Footer/>
  </React.StrictMode>
    </SnackbarProvider>
  </BrowserRouter>
);