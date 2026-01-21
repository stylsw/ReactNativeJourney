import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
const Tab = createBottomTabNavigator();

function FeedScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="跳转到 Profile 页面"
        onPress={() => prop.navigation.navigate('Profile')}
      />
      <Button
        title="跳转到 Settings 页面"
        onPress={() => prop.navigation.navigate('Settings')}
      />
    </View>
  );
}
function MessagesScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Messages Screen</Text>
    </View>
  );
}
function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}
function ProfileScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}
function SettingsScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator();
export default class index extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
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
