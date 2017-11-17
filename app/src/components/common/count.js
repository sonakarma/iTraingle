import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class count extends Component{
    render(){
        return(
            <View style={{position:'absolute',right:0}}>
            <View style={{flex:1/4,flexDirection: 'row' , justifyContent: 'flex-start',paddingRight:20}}>
                <View style={{height:20,width:20,borderRadius:20/2,borderWidth:1,marginTop:15, borderColor:'rgb(255,0,0)', backgroundColor : "rgb(255,0,0)", alignItems:'center',justifyContent:'center'}}> 
                    <Text 
                    style={{textAlign:'center',color: 'white',
                    fontSize:12}}>{this.props.count}</Text>
                </View>
            </View>    
        </View>
        )
    }
}