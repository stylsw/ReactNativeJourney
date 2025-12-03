import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={styles.containr}>
        <View style={[styles.itemBase]}>
          <Text style={[styles.h3]}> 扫一扫 </Text>
        </View>
        <View style={[styles.itemBase]}>
          <Text style={[styles.h3]}> 付款码 </Text>
        </View>
        <View style={[styles.itemBase]}>
          <Text style={[styles.h3]}> 卡包 </Text>
        </View>
        <View style={[styles.itemBase]}>
          <Text style={[styles.h3]}> 出行 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containr: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemBase: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#00b38a',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  h3: {
    fontSize: 20,
    color: 'white',
  },
});
