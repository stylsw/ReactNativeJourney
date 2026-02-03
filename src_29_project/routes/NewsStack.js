import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import NewsScreen from '../screens/News';
import DetailScreen from '../screens/News/Detail';

const Stack = createStackNavigator();

export default class NewsStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="News"
        // headerMode={'none'}
      >
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{
            title: '新闻列表',
            headerStyle: {
              backgroundColor: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="NewsDetail"
          component={DetailScreen}
          options={{
            title: '新闻详情', //自定义标题栏的标题
            // 自定义标题栏样式
            headerStyle: {
              backgroundColor: '#fff', // 自定义标题栏背景颜色
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
