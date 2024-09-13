const { render, screen } = require('@testing-library/react');
const App = require('./App');

test('renders learn react link', () => {
  render(React.createElement(App));
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
