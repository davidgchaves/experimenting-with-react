/** @jsx React.DOM */

var React = require('react');

var SubMessage = React.createClass({

  handleDelete: function(e) {
    this.props.onDelete(this.props.message);
  },

  propTypes: {
    message: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      message: 'So good to see you'
    };
  },

  render: function() {
    return (
      <div>
        {this.props.message}
        <button className="btn btn-danger" onClick={this.handleDelete}>x</button>
      </div>
    );
  }
});

module.exports = SubMessage;

