const React = require('react');
const ReactDOMServer = require('react-dom/server');

const message = React.createElement('h1', null, 'Hello, World!');

const renderedMessage = ReactDOMServer.renderToStaticMarkup(message);

module.exports = renderedMessage;
