/** @jsx React.DOM */

var React = require('react');

var DashBoard = require('./DashBoard');

var dashComponent = React.render(
  <DashBoard url="metric" />,
  document.getElementById('app')
);

