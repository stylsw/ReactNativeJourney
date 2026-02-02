import React, {Component} from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';
import {getThreeDays} from './api';

export default class index extends Component {
  getData = () => {
    getThreeDays({longitude: '112.222', latitude: '39.444'})
      .then(data => {
        console.log('三天天气预报', data);
        Alert.alert('三天天气预报', JSON.stringify(data));
      })
      .catch(error => {
        console.log('获取数据出错', error);
      });
    // let key = '687e517f06684448a9f4695721414a07';
    // let location = '112.222,39.222';
    // const url = `https://devapi.qweather.com/v7/weather/3d?key=${key}&location=${location}`;
    // fetch(url, {
    //   method: 'GET',
    // })
    //   .then(response => response.json()) // 解析返回的JSON数据
    //   .then(result => {
    //     console.log('result', result);
    //     Alert.alert('返回结果', JSON.stringify(result));
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="点击获取数据" onPress={this.getData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
