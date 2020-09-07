import React from 'react';
import {Text,Image,View,StyleSheet,Platform,Dimensions} from 'react-native';
import ScreenWelcome from './app/screen/ScreenWelcome';
import ViewImageScreen from './app/screen/ViewImageScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppButton from './app/components/AppButton';
import Card from './app/screen/Card';
import ListingDetails from './app/screen/ListingDetails';
import MessageScreen from './app/screen/MessageScreen';
export default function App(){
  return <MessageScreen/>
}

/*import React from 'react';
import {StyleSheet,Text,View,Image,SafeAreaView} from 'react-native';

export default function App(){
  return(
    <SafeAreaView style={styles.container}>
      <Text>Hello react sena</Text>
      <Image blurRadius={10} source={{width:200,
      height:300,
      uri:"https://picsum.photos/200/300",
      }}/>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
  },
});
/*import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

import { API_KEY } from './utils/WeatherAPIKey';

import Weather from './components/Weather';

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Getting Weather Condtions'
        });
      }
    );
  }

  fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, weatherCondition, temperature } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Fetching The Weather</Text>
          </View>
        ) : (
          <Weather weather={weatherCondition} temperature={temperature} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});
*/