/** @jsx React.DOM */

var React = require('react');

// NEEDED in order for Bootstrap to work!
var $ = jQuery = require('jquery')
                 require('bootstrap');

var DashBoard = React.createClass({

  loadData: function(url) {
    return $.get('https://gsr-demo.firebaseio-demo.com/' + url + '/.json');
  },

  componentWillMount: function() {
  },

  componentDidMount: function() {
    this.loadData(this.props.url).then(function(data) {
      this.setState({ metric: data });
      $('#tip').tooltip();
    }.bind(this));
  },

  componentWillReceiveProps: function(nextProps) {
    var lastUrl = this.props.url;
    this.loadData(nextProps.url).then(function(data) {
      this.setState({
        lastRoute: lastUrl,
        metric: data
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    debugger;
    $('#tip').tooltip('destroy');
  },

  getInitialState: function() {
    return {
      metric: 0,
      lastRoute: ''
    };
  },

  render: function() {
    return (
      <div className="jumbotron">
        {this.state.lastRoute}
        <a id="tip" href="#" data-toggle="tooltip" title="Hover!">Hover over me</a>
        <h2>{this.state.metric}</h2>
      </div>
    );
  }
});

module.exports = DashBoard;

