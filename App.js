const React = require('react');
const { BrowserRouter: Router, Routes, Route } = require('react-router-dom');
const Login = require('./Login');
const Register = require('./Register');

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      'div',
      { className: 'App' },
      React.createElement('h1', null, 'Welcome to My React App'),
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/login', element: React.createElement(Login) }),
        React.createElement(Route, { path: '/register', element: React.createElement(Register) })
      )
    )
  );
}

module.exports = App;

