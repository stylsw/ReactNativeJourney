import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import NewsScreen from '../screens/News';
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
            title: '新闻',
            headerStyle: {
              backgroundColor: 'tomato',
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
