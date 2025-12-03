/* eslint-disable no-alert */
import React, {Component} from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';

export default class index extends Component {
  createTwoButtonAlert = () => {
    Alert.alert('警告标题', '警告内容', [
      {
        text: '取消',
        onPress: () => console.log('取消按钮被点击'),
        style: 'cancel',
      },
      {
        text: '确认',
        onPress: () => console.log('确认按钮被点击'),
        style: 'default',
      },
    ]);
  };
  createThreeButtonAlert = () => {
    Alert.alert('警告标题', '警告内容', [
      {
        text: '取消',
        onPress: () => console.log('取消按钮被点击'),
        style: 'cancel',
      },
      {
        text: '确认',
        onPress: () => console.log('确认按钮被点击'),
        style: 'default',
      },
      {text: '稍后再说', onPress: () => console.log('稍后再说按钮被点击')},
    ]);
  };
  render() {
    return (
      <View style={[styles.container]}>
        <Button title="alert" onPress={() => alert('我是一个按钮')} />
        <Button
          title="Alert.alert"
          onPress={() => Alert.alert('我是一个按钮')}
          color={'red'}
        />
        <Button
          title="两个按钮的Alert"
          onPress={this.createTwoButtonAlert}
          color={'green'}
        />
        <Button
          title="三个按钮的Alert"
          onPress={this.createThreeButtonAlert}
          color={'blue'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
