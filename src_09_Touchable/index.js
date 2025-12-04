/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <TouchableHighlight onPress={() => alert('触碰高亮显示')}>
          <View style={[styles.item]}>
            <Text> 触碰高亮 </Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => alert('触碰透明变化显示')}>
          <View style={[styles.item]}>
            <Text> 触碰透明变化 </Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback onPress={() => alert('触碰无响应显示')}>
          <View style={[styles.item]}>
            <Text> 触碰无响应 </Text>
          </View>
        </TouchableNativeFeedback>
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
  item: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
});
