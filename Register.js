const React = require('react');

function Register() {
  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Register Page'),
    React.createElement(
      'form',
      null,
      React.createElement('label', null, 'Name:'),
      React.createElement('input', { type: 'text' }),
      React.createElement('br'),
      React.createElement('label', null, 'Email:'),
      React.createElement('input', { type: 'email' }),
      React.createElement('br'),
      React.createElement('label', null, 'Password:'),
      React.createElement('input', { type: 'password' }),
      React.createElement('br'),
      React.createElement('label', null, 'Confirm Password:'),
      React.createElement('input', { type: 'password' }),
      React.createElement('br'),
      React.createElement('button', { type: 'submit' }, 'Register')
    )
  );
}

module.exports = Register;
