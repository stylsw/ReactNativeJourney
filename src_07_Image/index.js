import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Image
          style={[styles.imageItem]}
          source={require('./images/1689659210837955.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imageItem: {
    width: Dimensions.get('window').width,
    height: 200,
    marginVertical: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
