/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Platform,
  SafeAreaView,
} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor: '#dfd'}} horizontal={true}>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>娱乐</Text>
          <Text style={[styles.nav]}>体育</Text>
          <Text style={[styles.nav]}>财经</Text>
          <Text style={[styles.nav]}>军事</Text>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>时尚</Text>
          <Text style={[styles.nav]}>科技</Text>
        </ScrollView>
        <ScrollView
          style={[styles.scrollView]}
          contentContainerStyle={{margin: 20}}
          showsVerticalScrollIndicator={false}>
          <Text style={[styles.text]}>
            {' '}
            工业物联网（IIoT）：设备数据采集与分析（需理解“数控机床的主轴温度、转速与产品精度的关系”，技术需将数据转化为“设备维护预警”等业务动作）；
            MES系统（制造执行系统）：生产排产优化（需理解“订单优先级、物料齐套率、设备产能”的制约关系，技术算法要平衡“交付时效”与“生产成本”）；
            质量追溯系统：需理解“产品不良品的产生环节”（如焊接工艺参数异常导致的缺陷），技术需实现“生产数据→不良原因”的反向追溯。
            为什么值得做：制造业数字化转型依赖“懂生产的技术人”，纯技术人员易陷入“为数字化而数字化”（比如盲目上物联网设备却不会分析数据），而有车间经验的技术人员能精准定位痛点（如某环节停机1小时损失5万元，技术优化需优先解决）。
            作者：晴小篆 链接：https://juejin.cn/post/7543976401176985643
            来源：稀土掘金
            著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。{' '}
          </Text>
          {/* 解决 ScrollView 在 Android 上底部被遮挡，无法滚动到底部的问题 */}
          <View style={{height: Platform.OS === 'ios' ? 0 : 100}} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  scrollView: {
    backgroundColor: '#ddd',
    marginHorizontal: 20,
  },
  nav: {
    fontSize: 30,
    margin: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
