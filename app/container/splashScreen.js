import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image
} from 'react-native';
import SplashBG from './app/img/SplashBG@0,5x.png';
import Logo from './app/img/Logo@0,5x.png';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={SplashBG} style={styles.ImageContainer} resizeMode="stretch">
          <View>
            <Image source={Logo} style={styles.ImageLogo}/>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch"
  },
  ImageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  ImageLogo: {
    marginTop : 120,
    marginLeft : 135,
  },
});
