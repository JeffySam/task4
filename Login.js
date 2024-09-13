const React = require('react');

function Login() {
  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Login Page'),
    React.createElement(
      'form',
      null,
      React.createElement('label', null, 'Email:'),
      React.createElement('input', { type: 'email' }),
      React.createElement('br'),
      React.createElement('label', null, 'Password:'),
      React.createElement('input', { type: 'password' }),
      React.createElement('br'),
      React.createElement('button', { type: 'submit' }, 'Login')
    )
  );
}

module.exports = Login;
