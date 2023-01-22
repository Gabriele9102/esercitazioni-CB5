import React from 'react';
import ReactDOM from 'react-dom/client';
import LayoutWrapper from './layouts/layoutWrapper/LayoutWrapper';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LayoutWrapper>

    <App />

    </LayoutWrapper>
);
