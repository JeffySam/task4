const React = require('react');
const ReactDOM = require('react-dom/client');
const App = require('./App');
const reportWebVitals = require('./reportWebVitals');
require('./index.css');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));

reportWebVitals();
