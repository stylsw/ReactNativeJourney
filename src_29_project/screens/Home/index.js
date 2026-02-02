import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getCityInfo, getIndices, getThreeDays} from '../../utils/api';
import LinearGradient from 'react-native-linear-gradient';
import weatherIcons from '../../utils/weatherIcons';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: {},
      indices: [],
      threeDays: [],
    };
  }
  componentDidMount() {
    // Geolocation.getCurrentPosition(
    //   info => {
    //     console.log('获取地理位置成功', info);
    //     // 获取地理位置成功后将其保存下来
    //     // 获取位置成功后，调用天气信息
    //   },
    //   error => Alert.alert('报错', JSON.stringify(error)),
    //   {
    //     enableHighAccuracy: true,
    //     timeout: 20000,
    //   },
    // );

    const coords = {latitude: 39.444, longitude: 112.333};
    // 根据经纬度获取城市信息
    getCityInfo(coords)
      .then(data => {
        console.log('城市信息', data);
        this.setState({city: data});
      })
      .catch(error => {
        console.log('获取城市信息出错', error);
      });

    // 根据经纬度获取生活指数
    getIndices(coords)
      .then(data => {
        console.log('生活指数', data);
        this.setState({indices: data});
      })
      .catch(error => {
        console.log('获取生活指数出错', error);
      });

    // 获取三天天气预报
    getThreeDays(coords)
      .then(data => {
        console.log('三天天气预报', data);
        this.setState({threeDays: data});
      })
      .catch(error => {
        console.log('获取三天天气预报出错', error);
      });
  }

  indicesItem = ({index, item}) => (
    <TouchableOpacity
      key={'index' + item.type}
      onPress={() => Alert.alert(item.type)}>
      <View style={[styles.indexItem]}>
        <Text style={[styles.indexName]}>{item.name}</Text>
        <Text style={[styles.indexBase]}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <ScrollView>
        <View style={[styles.container]}>
          <TouchableOpacity onPress={() => Alert.alert('扫一扫')}>
            <View style={[styles.itemBase]}>
              <Ionicons name="scan-outline" size={40} color="white" />
              <Text style={[styles.fontBase]}>扫一扫</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('付款码')}>
            <View style={[styles.itemBase]}>
              <Ionicons name="qr-code-outline" size={40} color="white" />
              <Text style={[styles.fontBase]}>付款码</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('出行')}>
            <View style={[styles.itemBase]}>
              <Ionicons name="trail-sign-outline" size={40} color="white" />
              <Text style={[styles.fontBase]}>出行</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('卡包')}>
            <View style={[styles.itemBase]}>
              <Ionicons name="card-outline" size={40} color="white" />
              <Text style={[styles.fontBase]}>卡包</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Swiper autoplay={true} showsButtons={true} style={[styles.wrapper]}>
          <Image
            style={[styles.slideImage]}
            source={require('../../images/1.jpg')}
          />
          <Image
            style={[styles.slideImage]}
            source={require('../../images/2.jpg')}
          />
          <Image
            style={[styles.slideImage]}
            source={require('../../images/3.jpg')}
          />
        </Swiper>
        <View style={[styles.city]}>
          <Text style={[styles.cityText]}>
            {this.state.city.country} {this.state.city.adm1}{' '}
            {this.state.city.adm2}
          </Text>
        </View>
        <View style={[styles.indexContainer]}>
          <FlatList
            data={this.state.indices}
            renderItem={this.indicesItem}
            keyExtractor={item => item.type}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={[styles.dailyContainer]}>
          {this.state.threeDays.map((item, index) => (
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#ddd', '#333']}
              key={'weather' + index}
              style={[styles.dailyItem]}>
              <Text style={[styles.dailyItemTitle]}>{item.fxDate}</Text>
              <View style={styles.dailyItemContent}>
                <View style={styles.dailyRow}>
                  <Image
                    style={[styles.weatherIcon]}
                    source={weatherIcons[item.iconDay]}
                  />
                  <Text>
                    {item.textDay} {item.tempMax}°
                  </Text>
                </View>

                <View style={styles.dailyRow}>
                  <Text>
                    {item.tempMin}° {item.textNight}
                  </Text>
                  <Image
                    style={[styles.weatherIcon]}
                    source={weatherIcons[item.iconNight]}
                  />
                </View>
              </View>
            </LinearGradient>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  itemBase: {
    width: Dimensions.get('window').width / 4,
    height: 90,
    backgroundColor: '#00b38a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontBase: {
    color: 'white',
    marginTop: 5,
    fontSize: 16,
  },
  wrapper: {
    height: 200,
  },
  slideImage: {
    height: 200,
    width: Dimensions.get('window').width,
  },
  city: {
    flex: 1,
    justifyContent: 'center',
  },
  cityText: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  indexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  indexItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: Dimensions.get('window').width / 3 - 10,
    height: 80,
    backgroundColor: '#deb',
    marginTop: 10,
    marginRight: 10,
  },
  indexName: {
    color: '#222',
    fontSize: 14,
  },
  indexBase: {
    fontSize: 15,
    color: '#00b38a',
  },
  dailyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
  dailyItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    width: Dimensions.get('window').width - 20,
    marginTop: 10,
  },
  dailyItemTitle: {
    color: 'white',
    fontSize: 16,
  },
  dailyItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width - 40,
    alignItems: 'center',
    marginBottom: 10,
  },
  dailyRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});
