import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './nav-bar/Nav';
import registerServiceWorker from './registerServiceWorker';

import About from './about/About';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Nav />, document.getElementById('nav'));
registerServiceWorker();

