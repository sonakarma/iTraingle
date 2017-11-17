import {
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
  } from './type';
  import {Alert,AsyncStorage,NetInfo} from 'react-native'
  import {Actions} from 'react-native-router-flux'
  import {URL,LOGIN_RESPONSE,USERNAME,PASSWORD,IS_LOGIN} from '../components/common/constants'

export const userNameChanged=(userName)=>{
    console.log("inside user name changed")
    return {
        type:USERNAME_CHANGED,
        payload:userName,
    }
}
export const passwordChanged=(password)=>{
    console.log("inside password change")
  return {
      type:PASSWORD_CHANGED,
      payload:password,
  }
}
export const handleLogin= ({username,password})=>{
    console.log("inside hand",username,password)
  return (dispatch)=>{//we can dispatch any number  of actions,witn the help of redux thunk
    dispatch({
        type:LOGIN_USER,
        payload:true
    })
    NetInfo.isConnected.fetch().then(isConnected => {
      console.log("is connected",isConnected)
      if(isConnected){
        this.login(username,password,dispatch);
      }else{
        Alert.alert("Please check your network connecticity")
      }
    });
    
  }
}

login=(username,password,dispatch)=>{
  const loginURL = URL + '{"username":"'+username+'","password": "'+ password + '","clientid":"CLIENT_1ZF"}'
  
      fetch(loginURL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "username": username,
          "password": password,
        })
      }).then((response) => {
        return response.json()
          .then((json) => {
            console.log(loginURL,"responce from login api",json)
            if (json[0].login === "PASS") {
              console.log('before storing data to async storage',json[0]);
               
                try {
                  AsyncStorage.setItem(LOGIN_RESPONSE,JSON.stringify(json[0]));
                  AsyncStorage.setItem(USERNAME,username);
                  AsyncStorage.setItem(PASSWORD,password);
                  AsyncStorage.setItem(IS_LOGIN,'true');
                } catch (error) {
                  console.log('error while saving data to async storage in auth action')
                }
              dispatch({
                type:LOGIN_USER_SUCCESS,
                payload:json
            })
              Actions.loading()
            }
            else {
                dispatch({
                    type:LOGIN_USER_FAIL,
                    payload:"OOps! login Failed"
                })
              Alert.alert('Oops! Login Failed')
            }
          })
      }).catch((error) => {
        console.error(error,'error');
      });

  }

