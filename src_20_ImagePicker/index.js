import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
/**
 * 注意事项:
 * react-native-image-picker 8.x 版本使用新的 API
 * launchImageLibrary - 打开相册
 * launchCamera - 打开相机
 */

const options = {
  mediaType: 'photo',
  cameraType: 'back',
  quality: 0.5,
  maxWidth: Dimensions.get('window').width / 2,
  maxHeight: Dimensions.get('window').height / 2,
  includeBase64: false,
  saveToPhotos: false,
};

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      avatar: 'https://reactnative.dev/img/tiny_logo.png',
    };
  }
  changeImage = () => {
    launchImageLibrary(options, response => {
      console.log('Response=', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        // 新版本 API 返回的图片数据在 assets 数组中
        this.setState({
          avatar: response.assets[0].uri,
        });
      }
    });
  };

  render() {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity onPress={this.changeImage}>
          <View style={[styles.avatar]}>
            <Image style={[styles.avatar]} source={{uri: this.state.avatar}} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
  },
});
