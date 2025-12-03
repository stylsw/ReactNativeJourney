import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Switch} from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidenStatusBar: false,
    };
  }
  toggleSwitch = () => {
    this.setState({hidenStatusBar: !this.state.hidenStatusBar});
  };
  render() {
    return (
      <View style={[styles.container]}>
        {/* 仅Android有效 */}
        <StatusBar
          hidden={this.state.hidenStatusBar}
          backgroundColor={'red'} //仅Android有效
          barStyle={'light-content'}
        />
        <Switch
          trackColor={{false: '#999', true: '#666'}}
          thumbColor={this.state.hidenStatusBar ? 'red' : 'white'}
          value={this.state.hidenStatusBar}
          onValueChange={this.toggleSwitch}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
