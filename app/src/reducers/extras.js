import {
    SELECTED_SUMMARY
  } from '../actions/type';
  import {Alert} from 'react-native';
  
  const INITIAL_STATE = {
    selectedSummary: '',
  
  };

  export default (state=INITIAL_STATE,action)=>{
      switch(action.type){
          case SELECTED_SUMMARY:
          return {...state,selectedSummary:action.payload};
          default:
          return state;
      }
  }
  