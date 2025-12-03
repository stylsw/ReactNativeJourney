/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

export default class Flex extends Component {
  render() {
    return (
      <View style={{height: '100%'}}>
        <Text style={[styles.h2]}> 主轴方向尺寸占比 </Text>
        <ScrollView>
          <Text style={[styles.h3]}>flexRow 1:1:1</Text>
          <View style={[styles.containerBase, styles.flexRow]}>
            <Text style={[styles.itemBase, {flex: 1}]}>刘备(1)</Text>
            <Text style={[styles.itemBase, {flex: 1}]}>关羽(1)</Text>
            <Text style={[styles.itemBase, {flex: 1}]}>张飞(1)</Text>
          </View>
          <Text style={[styles.h3]}>flexRow 1:2:3</Text>
          <View style={[styles.containerBase, styles.flexRow]}>
            <Text style={[styles.itemBase, {flex: 1}]}>刘备(1)</Text>
            <Text style={[styles.itemBase, {flex: 2}]}>关羽(2)</Text>
            <Text style={[styles.itemBase, {flex: 3}]}>张飞(3)</Text>
          </View>
          <Text style={[styles.h3]}>flexColumn 1:1:1</Text>
          <View style={[styles.containerBase, styles.flexColumn]}>
            <Text style={[styles.itemBase, {flex: 1}]}>刘备(1)</Text>
            <Text style={[styles.itemBase, {flex: 1}]}>关羽(1)</Text>
            <Text style={[styles.itemBase, {flex: 1}]}>张飞(1)</Text>
          </View>
          <Text style={[styles.h3]}>flexColumn 1:2:3</Text>
          <View style={[styles.containerBase, styles.flexColumn]}>
            <Text style={[styles.itemBase, {flex: 1}]}>刘备(1)</Text>
            <Text style={[styles.itemBase, {flex: 2}]}>关羽(2)</Text>
            <Text style={[styles.itemBase, {flex: 3}]}>张飞(3)</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerBase: {
    height: 150,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
  },
  h2: {
    fontSize: 30,
    marginHorizontal: 10,
    fontStyle: 'bold',
  },
  h3: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  itemBase: {
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#dfd',
    padding: 5,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
});
