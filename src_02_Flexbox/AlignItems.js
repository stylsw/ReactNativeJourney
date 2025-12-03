/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

export default class AlignItems extends Component {
  render() {
    return (
      <View style={{height: '100%'}}>
        <Text style={[styles.h2]}> 交叉轴方向上对齐方式 </Text>
        <ScrollView>
          <Text style={[styles.h3]}>alignItems: 'flex-start' (默认值)</Text>
          <View
            style={[
              styles.containerBase,
              styles.flexRow,
              styles.alignItemsFlexStart,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>alignItems: 'center'</Text>
          <View
            style={[
              styles.containerBase,
              styles.flexRow,
              styles.alignItemsCenter,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>alignItems: 'flex-end'</Text>
          <View
            style={[
              styles.containerBase,
              styles.flexRow,
              styles.alignItemsFlexEnd,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>alignItems: 'stretch'</Text>
          <View
            style={[
              styles.containerBase,
              styles.flexRow,
              styles.alignItemsStretch,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>alignItems: 'baseline'</Text>
          <View
            style={[
              styles.containerBase,
              styles.flexRow,
              styles.alignItemsBaseline,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase, {fontSize: 60}]}>关羽</Text>
            <Text style={[styles.itemBase, {fontSize: 40}]}>张飞</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerBase: {
    height: 100,
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
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#dfd',
    padding: 5,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },
  alignItemsBaseline: {
    alignItems: 'baseline',
  },
});
