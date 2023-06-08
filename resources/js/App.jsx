/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';        
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('App')).render(   
    <React.StrictMode>
        <Home />
    </React.StrictMode>        
); 