/* eslint-disable no-alert */
import {ActivityIndicator, Platform, StyleSheet, View} from 'react-native';
import React from 'react';

export default function index() {
  if (Platform.OS === 'ios') {
    alert('当前平台是IOS');
  } else if (Platform.OS === 'android') {
    alert('当前平台是Android');
  }
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color="blue" />
      <ActivityIndicator size="large" color="green" />
      {/* 数字指定大小只对Android设备上应用有效 */}
      <ActivityIndicator size={70} color="#00d0ff" />
      <ActivityIndicator size={100} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
