import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kol from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Kol />, document.getElementById('root'));
registerServiceWorker();
