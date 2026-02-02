import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import UserScreen from '../screens/User';
const Stack = createStackNavigator();

export default class UserStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="User"
        // headerMode={'none'}
      >
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            title: '用户',
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
