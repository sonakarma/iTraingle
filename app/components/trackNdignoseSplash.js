import React, { Component } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import SplashBG from './common/images/SplashBG@0,5x.png';
import Logo from './common/images/Logo@0,5x.png';
import {Actions} from 'react-native-router-flux'

export default class Splash extends Component {

  state = {
    ready: false,
  }

  componentWillMount () {
    setTimeout(() => {
      this.setState({ ready: true })
      console.log("set ready to true")
    }, 3000)
  }


  componentDidUpdate(){
    console.log("componentDidUpdate")
    if(this.state.ready==true)
    Actions.loading();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./common/images/SplashBG@0,5x.png')} style={styles.ImageContainer} resizeMode="stretch"/>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{flex:1,justifyContent:'center'}}>
          <Image style={styles.ImageLogo} 
              source={Logo} />
          </View>
            <View style={{flex:1}}></View>
          </View>
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
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null
  },
  ImageLogo: {
    resizeMode:'contain',
    alignItems:'center',
    justifyContent:'center'
  },
});
