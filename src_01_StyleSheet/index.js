import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}> textInComponent </Text>
        <Text style={[{color: 'blue'}, {fontSize: 30}, {color: 'green'}]}>
          textInComponent
        </Text>

        <Text style={[styles.h1]}>Hello React Native</Text>
        <Text style={[styles.h2]}>Hello React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 35,
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
