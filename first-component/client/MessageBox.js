/** @jsx React.DOM */

var React = require('react'),
    _     = require('lodash');

var SubMessage = require('./SubMessage');

var MessageBox = React.createClass({

  deleteMessage: function(message) {
    var newMessages = _.without(this.state.messages, message);
    this.setState({
      messages: newMessages
    });
  },

  handleAdd: function(e) {
    var newMessage = this.refs.newMessage.getDOMNode().value;
    var newMessages = this.state.messages.concat([newMessage]);
    this.setState({
      messages: newMessages
    });
  },

  getInitialState: function() {
    return {
      isVisible: true,
      messages: [
        'My tailor is rich',
        'Once upon a time',
        'En un lugar de la Mancha',
        'Triggering...'
      ]
    };
  },

  render: function() {
    var inlineStyles = {
      display: this.state.isVisible ? 'block' : 'none'
    };

    var messages = this.state.messages.map(function(message) {
      return <SubMessage message={message} onDelete={this.deleteMessage} />;
    }.bind(this));

    return (
      <div className="container jumbotron" style={inlineStyles}>
        <h2>Hello, World!</h2>
        <input ref="newMessage" type="text" />
        <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
        {messages}
        </div>
    );
  }
});

module.exports = MessageBox;

