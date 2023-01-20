import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LayoutWrapper from './layouts/layoutWrapper/LayoutWrapper';
import App from './App';
import Footer from './components/footer/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LayoutWrapper>
    <App />
    </LayoutWrapper>
);
