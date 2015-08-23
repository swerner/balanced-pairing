'use strict';

var STORAGE_KEY = "@StoredTeam";

var React = require('react-native');
var TeamScreen = require('./TeamScreen');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  NavigatorIOS,
  TouchableHighlight,
  ListView,
  AsyncStorage
} = React;

var AddTeamMemberScreen = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      self: this
    };
  },

  onNameTextChanged: function(event) {
    this.setState({ name: event.nativeEvent.text });
  },

  addTeamMember: function() {
    this.props.onTeamMemberAdded(this.state.name);
    this.props.navigator.pop();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TextInput
          style={ styles.input }
          value={ this.state.name }
          onChange={ this.onNameTextChanged }
          placeholder="Team Member's Name"
        />
        <TouchableHighlight
          onPress={ this.addTeamMember }
          >
          <Text>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  }
});

module.exports = AddTeamMemberScreen;
