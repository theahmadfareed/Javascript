import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// Fibre = undelaying algorithm of React
/**
 * different components produces different trees, instead of diff between them replace the old tree completely.
 * Diffing of list is performed using keys, keys should be stable, predictable and unique
 */
// Reconciliation = an algorithm behind VDOM that decides by comparing DOM and VDOM, which element should get updated
// createRoot() = creates Virtual-DOM

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);
