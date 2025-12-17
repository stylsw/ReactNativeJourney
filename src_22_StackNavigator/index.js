/* eslint-disable no-alert */
import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="跳转到新闻页面"
        onPress={() => prop.navigation.navigate('News')}
      />
    </View>
  );
}
function NewsScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>News Screen</Text>
      <Button
        title="跳转到Home页面"
        onPress={() => prop.navigation.navigate('Home')}
      />
    </View>
  );
}
const Stack = createStackNavigator();
export default class index extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="News"
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
            headerRight: () => (
              <TouchableOpacity onPress={() => alert('hello !')} >
                <Text style={[styles.headerRight]}>hello</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
    );
  }
}

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
