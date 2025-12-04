/* eslint-disable no-alert */
import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, TextInput, Button} from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }
  doLogin = () => {
    alert(
      '登录按钮被点击了, 用户名是:' +
        this.state.username +
        ', 密码是:' +
        this.state.password,
    );
  };
  render() {
    return (
      <View style={[styles.container]}>
        <TextInput
          style={[styles.input]}
          placeholder="请输入用户名"
          value={this.state.username}
          onChangeText={text => this.setState({username: text})}
        />
        <TextInput
          style={[styles.input]}
          placeholder="请输入密码"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={text => this.setState({password: text})}
        />
        <TextInput
          style={[styles.input]}
          placeholder="请输入手机号码"
          keyboardType="number-pad"
          // value={this.state.password}
          // onChangeText={text => this.setState({password: text})}
        />
        <TextInput
          style={[styles.input]}
          placeholder="请输入自我介绍"
          keyboardType="number-pad"
          multiline={true}
          numberOfLines={5}
          textAlignVertical="top"
          // value={this.state.password}
          // onChangeText={text => this.setState({password: text})}
        />
        <View style={[styles.btn]}>
          <Button title="登录" onPress={this.doLogin} />
        </View>
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
  input: {
    width: Dimensions.get('window').width - 40,
    borderColor: 'red',
    borderWidth: 1,
    margin: 20,
    paddingHorizontal: 5,
  },
  btn: {
    margin: 10,
    width: Dimensions.get('window').width - 40,
  },
});
