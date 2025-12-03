import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

export default class JustifyContent extends Component {
  render() {
    return (
      <View>
        <Text style={[styles.h2]}> 主轴方向上对齐方式 </Text>
        <ScrollView>
          <Text style={[styles.h3]}>justifyContent: 'flex-start' (默认值)</Text>
          <View
            style={[
              styles.containerBase,
              styles.flexRow,
              styles.justifyContentFlexStart,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent: 'center'</Text>
          <View
            style={[
              styles.containerBase,
              styles.flexRow,
              styles.justifyContentCenter,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent: 'flex-end'</Text>
          <View
            style={[
              styles.containerBase,
              styles.flexRow,
              styles.justifyContentFlexEnd,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent: 'space-around'</Text>
          <View
            style={[
              styles.containerBase,
              styles.flexRow,
              styles.justifyContentSpaceAround,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent: 'space-evenly'</Text>
          <View
            style={[
              styles.containerBase,
              styles.flexRow,
              styles.justifyContentSpaceEvenly,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent: 'space-between'</Text>
          <View
            style={[
              styles.containerBase,
              styles.flexRow,
              styles.justifyContentSpaceBetween,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
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
    height: 30,
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
  justifyContentFlexStart: {
    justifyContent: 'flex-start',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentFlexEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentSpaceAround: {
    justifyContent: 'space-around',
  },
  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
});
