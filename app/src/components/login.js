import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
  AsyncStorage,
  Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LoginBg from './common/images/logo_aquila1.png';
import Logo from './common/images/Logo@0,5x.png';
import Eye from './common/images/eye@0,5x.png';
import EyeInvisible from './common/images/eye@invisible.png';
import {URL_LOGIN,IS_LOGIN,LOGIN_RESPONSE} from './common/constants'
import {userNameChanged,passwordChanged,handleLogin} from '../actions'

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      isSecureTextEntry : true,
      selectionColor : "transparent",
      noSelectionColor : "transparent",
      selected:''
    }
  }
  
  componentDidMount=()=>{
    console.log("calling component did mount inside login");
    this.checkLogin();
    // AsyncStorage.setItem(IS_LOGIN,"false");
  }

  
  checkLogin=()=>{
    AsyncStorage.getItem(IS_LOGIN, (err, result) => {
      console.log('login responce inside async storage',result,err);
      if(result!=null && result=='true'){
        Actions.splash();
      }
    });
  }

  handleLogin () {
    console.log("username",this.props.userName,'password',this.props.password)
    if(this.state.selected==''){
      Alert.alert("Pleace select the above option.")

    }else if(this.props.userName == "" || this.props.password == "")
    {
      Alert.alert("Please provide credentials")
    }
    else {
      this.props.handleLogin({username:this.props.userName,password:this.props.password});
    }
  }

  render() {
    return (
      <View style={styles.container}>
                 <Image source={LoginBg} style={styles.ImageContainer} resizeMode="stretch"/>
                 <View style={{flex:1}}></View>

       <View style={{flex:3}}>
          <ScrollView >
            <View style={styles.optionView}>
              <TouchableHighlight underlayColor='transparent' style={{ backgroundColor : this.state.noSelectionColor ,margin : 10,borderColor : "gray" , borderWidth : 1, borderRadius:10}} 
                onPress={ () =>
                  this.setState({
                    selectionColor : "transparent",
                    noSelectionColor : "#D3D3D3",
                    selected:'track'
                  })
                }>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:18, textAlign:'center',color:'#f26522',padding:5, fontWeight : 'bold'}}>
                  Track {"\n"} and {"\n"}Diagnose</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor='transparent' style={{backgroundColor: this.state.selectionColor ,margin : 10,borderColor : "gray" , borderWidth : 1, borderRadius : 10}}
                onPress={ () =>
                  this.setState({
                    selectionColor : "#D3D3D3",
                    noSelectionColor : "transparent",
                    selected:'school'
                  })
                }>
                <View style={{flex:1,justifyContent:'center',alignItems:'center' }}>
                  <Text style={{fontSize:18,textAlign:'center',color:'#f26522',padding:5, fontWeight : 'bold'}}>
                    School {"\n"}Parent</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.loginInput}>
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  clearButtonMode={'while-editing'}
                  placeholder={"Username"}
                  underlineColorAndroid={"transparent"}
                  value = {this.props.userName}
                  onChangeText={(userName) =>this.props.userNameChanged(userName) }
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
                    value = {this.props.password}
                    ref= "password"
                    onChangeText = {(password) =>this.props.passwordChanged(password)}
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
          </View>
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
    justifyContent:'center',
    marginTop  :40    
  },
  loginInput: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    marginBottom: 5,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor : "#4682b4",
    backgroundColor:'transparent',
    paddingLeft:10,
  },
  textInput: {
    color : 'gray',
    fontSize : 25,
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
    color: '#4d525a',
    fontWeight: 'bold',
  },
  optionView : {
    flex :1,
    flexDirection:'row',
    justifyContent:'center',
  }
});

mapStateToProps=({authReducer})=>{
  const {userName,password}=authReducer;
  return {userName,password};
}


export default connect(mapStateToProps,{userNameChanged,passwordChanged,handleLogin})(Login)