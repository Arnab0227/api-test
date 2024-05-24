import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import SearchImages from './Api'
import './index.css'

SearchImages();

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App />);