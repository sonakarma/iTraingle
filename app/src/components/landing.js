import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Button, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LoginBg from './common/images/logo_aquila1.png';

export default class Landing extends Component{

    constructor(props){
    	super(props)

    	this.state = {
          selectRadio : true
    	}
    }

	selectCircle(){
      	return (
          	<View style={styles.clickCircle}></View>
      	)
	}

    render(){
        return(
            <View style={styles.container}>
                <Image source={LoginBg} style={styles.ImageContainer} resizeMode="stretch"/>
                <View style={{flex:1, flexDirection: "column" , alignItems: "center", justifyContent:'center'}}>
                  	<View style={{flexDirection : "row"}}>
	                  	<View style={styles.circle1}><View style={styles.clickCircle}></View></View>
		                    <TouchableHighlight underlayColor='#C0C0C0' 
				              style = {{borderColor : "gray"}} onPress= { ()=> Actions.login()}>
				                <Text style={{ fontSize: 18,color: '#ff4081',fontWeight: 'bold'}}>
				                  	Track and Dignose
				                </Text>
				            </TouchableHighlight> 
			            <View>
                  	</View>
                  	<View style={{flexDirection : "row"}}>
	                  	<View style={styles.circle2}></View>
	                    <TouchableHighlight underlayColor='#C0C0C0' onPress= { ()=> Actions.login()}
			              style = {{borderColor : "gray" }}>
			                <Text style={{ fontSize: 18,color: '#ff4081',fontWeight: 'bold'}}>
			                  	School Parent
			                </Text>
			            </TouchableHighlight> 
			            </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
   	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent:'center',
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
  	circle1: {
	    width: 30,
	    height: 30,
	    borderRadius: 30/2,
	    backgroundColor: 'transparent',
	    borderColor : "#ff4081",
	    borderWidth : 2,
	    margin : 5
	},
	circle2: {
	    width: 30,
	    height: 30,
	    borderRadius: 30/2,
	    backgroundColor: 'transparent',
	    borderColor : "#ff4081",
	    borderWidth : 2,
	    margin : 5
	},
	clickCircle : {
		width: 16,
	    height: 16,
	    borderRadius: 16/2,
	    backgroundColor: '#ff4081',
	    borderColor : "white",
	    borderWidth : 2,
	    margin : 5
	}
})