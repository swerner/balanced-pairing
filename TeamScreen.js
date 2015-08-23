'use strict';

var STORAGE_KEY = "@StoredTeam";

var React = require('react-native');
var AddTeamMemberScreen = require('./AddTeamMemberScreen')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  ListView
} = React;


var TeamScreen = React.createClass({
  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    var team =[ {name: "Bruce Wayne"}, {name: "Clark Kent"} ]

    return {
      team: team,
      dataSource: ds.cloneWithRows(team)
    };
  },

  addTeamMember: function(name) {
    console.log("Team Screen: " + name);

    var team = this.state.team;
    team.push({name: name});

    this.setState({team: team, dataSource: this.state.dataSource.cloneWithRows(team)});
  },

  onAddPressed: function() {
    this.props.navigator.push({
      title: 'Add New Team Member',
      component: AddTeamMemberScreen,
      passProps: {
        onTeamMemberAdded: this.addTeamMember
      }
    });
  },

  renderEmptyTeam: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          underlayColor='#99d9f4'
          onPress={ this.onAddPressed }
          >
          <Text style={styles.buttonText}>Add New Team Member</Text>
        </TouchableHighlight>
      </View>
    );
  },

  renderTeamList: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMember}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor='#99d9f4'
          onPress={ this.onAddPressed }
          >
          <Text style={styles.buttonText}>Add New Team Member</Text>
        </TouchableHighlight>
      </View>
    );
  },

  renderMember: function(teamMember) {
    return (
      <TouchableHighlight>
        <View style={styles.row}>
          <Text>{teamMember.name}</Text>
        </View>
      </TouchableHighlight>
    );
  },

  render: function() {
    if(this.state.dataSource.length == 0) {
      return this.renderEmptyTeam();
    } else {
      return this.renderTeamList();
    }
  }
});

var styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5AC8FA',
    paddingRight: 20,
    marginTop: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 24
  },
  button: {
    height: 36,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: "#48BBEC",
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
});

module.exports = TeamScreen;
