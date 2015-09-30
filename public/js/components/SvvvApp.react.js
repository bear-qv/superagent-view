
/**
 * by material-ui.com
 */
var AppBar = require('material-ui/lib/app-bar');
var Paper = require('material-ui/lib/paper');
var IconButton = require('material-ui/lib/icon-button');

var React = require('react');
var PropTypes = React.PropTypes;

var SvvvApp = React.createClass({

  render: function() {
    return (
      <Paper zDepth={1} className="content">
        <AppBar title="SuperAgent V" iconElementRight={<IconButton iconClassName="muidocs-icon-custom-github" tooltip="GitHub"/>} zDepth={0} />
      </Paper>
    );
  }

});

module.exports = SvvvApp;
