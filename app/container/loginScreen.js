import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image,TextInput,TouchableHighlight,ScrollView
} from 'react-native';
import LoginBg from './app/img/login-bg@0,33x.png';
import Logo from './app/img/Logo@0,5x.png';
import Eye from './app/img/eye@0,5x.png';
import EyeInvisible from './app/img/eye@invisible.png';
import { Hoshi } from 'react-native-textinput-effects';

export default class App extends Component {


  render() {
    return (
      <View style={styles.container}>

        <Image source={LoginBg} style={styles.ImageContainer} resizeMode="stretch">
          <ScrollView>
          <View>
            <Image source={Logo} style={styles.ImageLogo}/>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.loginInput}>
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                clearButtonMode={'while-editing'}
                value={this.state.password}
                secureTextEntry={this.state.passwordHidden}
                placeholder={"Username"}
                underlineColorAndroid={"transparent"}
              />
            </View>
            <View style={styles.loginInput}>
              <View style={{justifyContent:'center',alignItems:'center',flexDirection : "row"}}>
              <View style={{flex:1}}>
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  clearButtonMode={'while-editing'}
                  secureTextEntry={true}
                  placeholder={"Password(required)"}
                  underlineColorAndroid={"transparent"}
                />
                </View>
                <Image source={EyeInvisible} style= {{alignItems:'center' , height : 100, width : 100}}/>

              </View>
            </View>

             <TouchableHighlight underlayColor='#C0C0C0' 
              style = {styles.button}>
                <Text style={styles.btnText}>
                  SIGN IN
                </Text>
            </TouchableHighlight> 
          </View>
        </ScrollView> 

        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent:'center',

  },
  formContainer : {
    flex: 1,
    flexDirection: "column",
    paddingTop : 150
  },
  loginInput: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    marginBottom: 5,
    height: 50,
    borderBottomWidth: 1,
    backgroundColor:'transparent',
    paddingLeft:10,
  },
  textInput: {
    color : 'gray',
    fontSize : 25,
  },
  ImageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  ImageLogo: {
    marginLeft : 140,
    marginTop : 30
  },
  button : {
    backgroundColor: 'transparent',
    margin:35,
    borderColor : "gray",
    borderWidth : 2,
    borderRadius : 50,
    marginTop : 55
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 15,
    color: 'black',
  },
});
