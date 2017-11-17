import React,{Component} from 'react';
import {View,Text,StyleSheet, Image,StatusBar} from 'react-native';
import Menu_Logo from './common/images/menu-icon@0,5x.png';
import Notification_Logo from './common/images/notification-icon@0,5x.png';

export default class Header extends Component{
    render(){
        return(
            <View style={styles.container}>
                            <StatusBar
                    backgroundColor="#005289"
                    barStyle="light-content"
                />
              
                <View style={styles.haederView}>
                       
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <Text style={styles.haederTitle}>DASHBOARD</Text>
                            <View style={{flexDirection : "row",justifyContent:'center',alignItems:'center'}}>
                                <Image source={Notification_Logo}  style={{margin:5}}/>
                                <Image source={Menu_Logo} style={{margin:5}} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
       height:50
    },
    haederView: {
        backgroundColor : "#005289", 
        height : 70, 
        flexDirection : "row",
        justifyContent:'center',
        alignItems:'center',
        padding:5,        
        flex:1
    },
    haederTitle : {
        textAlign: 'center',
        color : "#eaeef0",
        fontSize: 20,
        fontWeight: 'bold',
        flex:1
    }
})