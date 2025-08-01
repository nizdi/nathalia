import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// Cria o ponto de montagem do React
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);