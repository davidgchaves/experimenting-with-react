/** @jsx React.DOM */

var React = require('react');
var MessageBox = require('./MessageBox');

var messageBoxComponent = React.render(
  <MessageBox />,
  document.getElementById('app')
);

