import {StyleSheet} from 'react-native';
import React, {Component} from 'react';
import MainTab from './routes';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/NoAuth/Login';
import RegistrScreen from './screens/NoAuth/Register';
import SplashScreen from './screens/NoAuth/Splash';
const mapStateToProps = state => {
  return {
    isLogin: state.User.isLogin,
  };
};

const Stack = createStackNavigator();

class Index extends Component {
  render() {
    return (
      <>
        {this.props.isLogin ? (
          <MainTab />
        ) : (
          <Stack.Navigator headerMode="none" initialRouteName={'Splash'}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registr" component={RegistrScreen} />
          </Stack.Navigator>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps)(Index);

const styles = StyleSheet.create({});
