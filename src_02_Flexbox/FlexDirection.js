import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

export default class FlexDirection extends Component {
  render() {
    return (
      <View>
        <Text style={[styles.h2]}> 主轴方向 </Text>
        <ScrollView>
          <Text style={[styles.h3]}>flexDirection: 'column' (默认值)</Text>
          <View style={[styles.container]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>flexDirection: 'column-reverse'</Text>
          <View style={[styles.container, styles.flexDireactionColumnReverse]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>flexDirection: 'row'</Text>
          <View style={[styles.container, styles.flexDireactionRow]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>flexDirection: 'row-reverse'</Text>
          <View style={[styles.container, styles.flexDireactionRowReverse]}>
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
  container: {
    height: 150,
    borderWidth: 1,
    borderColor: '#DDD',
    margin: 10,
  },
  h2: {
    fontSize: 30,
    marginHorizontal: 10,
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
  flexDireactionColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexDireactionColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexDireactionRow: {
    flexDirection: 'row',
  },
  flexDireactionRowReverse: {
    flexDirection: 'row-reverse',
  },
});
