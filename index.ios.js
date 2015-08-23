'use strict';

var React = require('react-native');
var TeamScreen = require('./TeamScreen');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var BalancedPairing = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{component: TeamScreen, title: 'Your Team'}}
        style={styles.navContainer}
      />
    );
  }
});

var styles = StyleSheet.create({
  navContainer: {
    flex: 1
  },
});

AppRegistry.registerComponent('BalancedPairing', () => BalancedPairing);
