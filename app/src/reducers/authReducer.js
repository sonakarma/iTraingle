import {
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
  } from '../actions/type';
  import {Alert} from 'react-native';
  
  const INITIAL_STATE = {
    userName: 'fuelclient',
    password: 'aquila123',
    loginResponse: null,
    error: '',
    loading: false,
  };

  export default (state=INITIAL_STATE,action)=>{
      switch(action.type){
          case USERNAME_CHANGED:
          return {...state,userName:action.payload};
          case PASSWORD_CHANGED:
          return {...state,password:action.payload};
          case LOGIN_USER:
          return {...state,loading:action.payload};
          case LOGIN_USER_FAIL:
          return {...state,error:action.payload,loading:false,userName:'',password:''};
          case LOGIN_USER_SUCCESS:
          console.log(state);
          return {...state,loginResponse:action.payload,loading:false,error:''};
          default:
          return state;
      }
  }
  