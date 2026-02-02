import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import HomeScreen from '../screens/Home';
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
  headerRight: {marginRight: 10},
});

const HeaderRight = () => (
  <TouchableOpacity onPress={() => Alert.alert('hello!')}>
    <Text style={styles.headerRight}>hello</Text>
  </TouchableOpacity>
);

export default class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        // headerMode={'none'}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '首页',
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerRight: HeaderRight,
          }}
        />
      </Stack.Navigator>
    );
  }
}
