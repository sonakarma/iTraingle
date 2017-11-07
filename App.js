import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image,TextInput,TouchableHighlight,ScrollView,Alert
} from 'react-native';
import LoginBg from './app/img/login-bg@0,33x.png';
import Logo from './app/img/Logo@0,5x.png';
import Eye from './app/img/eye@0,5x.png';
import EyeInvisible from './app/img/eye@invisible.png';
import { Hoshi } from 'react-native-textinput-effects';

const URL = "http://14.192.17.38/aquila_api/events.php?req="

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isSecureTextEntry : true,
      username : "",
      password : ""
    }
  }

  //{"username":"fuelclient","password":"aquila123","clientid":"CLIENT_1ZF"}

  handleLogin () {

    if(this.state.username === "" || this.state.password === "")
    {
      Alert.alert("Please provide credentials")
    }
    else {
      const loginURL = URL + '{"username":"fuelclient","password":"aquila123","clientid":"CLIENT_1ZF"}'

      fetch(loginURL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "username": this.state.username,
          "password": this.state.password,
          "clientid": "CLIENT_1ZF"
        })
      }).then((response) => {
        return response.json()
          .then((json) => {
            if (json[0].login === "PASS") {
              Alert.alert('Login Successfully');
            }
            else {
              Alert.alert('Oops! Login Failed')
            }
          })
      }).catch((error) => {
        console.error(error,'error');
      });
    }
  }

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
                placeholder={"Username"}
                underlineColorAndroid={"transparent"}
                value = {this.state.username}
                onChangeText={(username) => this.setState({ username })}
                ref= "username" onSubmitEditing={ () => this.refs.password.focus()}
              />
            </View>
            <View style={styles.loginInput}>
              <View style={{justifyContent:'center',alignItems:'center',flexDirection : "row"}}>
              <View style={{flex:1}}>
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  clearButtonMode={'while-editing'}
                  secureTextEntry={this.state.isSecureTextEntry}
                  placeholder={"Password(required)"}
                  underlineColorAndroid={"transparent"}
                  value = {this.state.password}
                  ref= "password"
                  onChangeText = {(password) => this.setState({password})}
                />
                </View>
                {
                  (this.state.isSecureTextEntry) ? 
                 <TouchableHighlight onPress={ () => this.setState({
                  isSecureTextEntry:!this.state.isSecureTextEntry
                  })} underlayColor='transparent'>
                  <Image source={Eye} style= {{alignItems:'center'}}/></TouchableHighlight> : 
                  <TouchableHighlight onPress={ () => this.setState({
                  isSecureTextEntry:!this.state.isSecureTextEntry
                  })} underlayColor='transparent'>
                  <Image source={EyeInvisible} style= {{alignItems:'center' , height : 25, width : 25}} /> 
                  </TouchableHighlight>
                }
              </View>
            </View>
             <TouchableHighlight underlayColor='#C0C0C0' 
             onPress = { () => this.handleLogin()}
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
