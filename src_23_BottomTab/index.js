import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}
function NewsScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>News Screen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default class index extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            if (route.name === 'Home') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'News') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{activeTintColor: 'tomato', inactiveTintColor: 'gray'}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
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
