import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/_app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
