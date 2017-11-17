import React, { Component } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Loading extends Component {

  // componentDidMount() {
  //   this._interval = setInterval(() => {
  //   Actions.dashboard()
  //   }, 3000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this._interval);
  // }
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
    Actions.dashboard();
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./common/images/splash_aquila.png')} style={styles.ImageContainer} resizeMode="stretch"/>
          <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
            <Text style={styles.text}>Loading ....</Text>
           
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
  text : {
  	fontSize: 22,
    margin: 15,
    color: 'black',
    backgroundColor:'transparent',
    fontWeight: 'bold',
    padding:30
  }
});
