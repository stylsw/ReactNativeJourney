import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/Home';
import TakePictureScreen from '../screens/Home/TakePicture';

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
  headerRight: {marginRight: 10, fontSize: 18, color: 'white'},
});

const HeaderRight = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('TakePicture')}>
    <Text style={styles.headerRight}>拍照</Text>
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
          options={({navigation}) => ({
            title: '首页',
            headerStyle: {
              backgroundColor: '#00b38a',
              elevation: 0, // 删除安卓阴影
              shadowOpacity: 0, // 删除iOS阴影
            },
            headerTintColor: '#fff',
            headerRight: () => <HeaderRight navigation={navigation} />,
          })}
        />
        <Stack.Screen name="TakePicture" component={TakePictureScreen} />
      </Stack.Navigator>
    );
  }
}
