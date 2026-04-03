import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../images/bg1.jpg')}
        style={styles.image}>
        <StatusBar hidden={true} />
        <Animatable.View
          animation="slideInDown"
          duraton="2000"
          style={styles.header}>
          <Text style={styles.headerText}>看更大的世界！</Text>
        </Animatable.View>
        <Animatable.View
          style={[styles.footer]}
          animation="slideInUp"
          duraton="2000"
          direction="alternate">
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <LinearGradient
              colors={['#08d4C4', '#01ab9d']}
              style={styles.signIn}>
              <Text style={styles.textSign}>走起</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    // justifyContent: 'flex-end',
    // paddingHorizontal: 20,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 350,
  },
  footer: {
    // flex: 1,
    // backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 150,
  },
  signIn: {
    height: 45,
    width: Dimensions.get('window').width - 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 23,
  },
});
