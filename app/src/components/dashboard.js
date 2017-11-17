import React,{Component} from 'react';
import {View,Text,
    StyleSheet, 
    ScrollView, 
    TouchableHighlight, 
    Image, 
    StatusBar,
    AsyncStorage,
    BackHandler} from 'react-native';
import Header from './header.js';
import {URL,USERNAME,PASSWORD,LOGIN_RESPONSE} from './common/constants'
import TrackingDashboard from './trackingDashboard'
import AlertDashboard from './alertDashboard'
import Pie from 'react-native-pie'


export default class Dashboard extends Component{

        constructor(props){
            super(props)
            this.state = {
                dashboardData:{},
                flag : false,
                trackingColor: '#e3b604',
                trackingTextColor: 1,
                nonTrackingTextColor: 5,
                nonTrackingColor: '#0f9202',
                alertColor:'white',
                trackingColor:'#005289',
                selected:'tracking',
                trackingTextColor:'white',
                alertTextColor:'black'
            }
        }


        componentWillUnmount() {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
        }

        handleBackButtonClick() {
            console.log("login inside back handler")
            BackHandler.exitApp();
            return true;
        }

        
        componentDidMount(){
                BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
            }
        
        
            render(){
                return(
                    <View style={styles.container}>
                        <Header/>
                        <View style={styles.mainTabContainer}>
                                <View style={{flexDirection:'row',backgroundColor:'white',borderRadius:10}}>
                                    <TouchableHighlight 
                                    style={{padding:10,backgroundColor:this.state.trackingColor,borderRadius:10}}
                                    onPress={()=>{
                                        this.setState({
                                            alertColor:'white',
                                            selected:'tracking',
                                            trackingColor:'#005289',
                                            trackingTextColor:'white',
                                            alertTextColor:'black'
                                        })
                                    }} >
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('./common/images/live_tracking/live-tracking-icon.png')} />
                                        <Text style={{fontSize:16,textAlign:'center',color:this.state.trackingTextColor,marginLeft:20}}>TRACKING</Text>
                                    </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight 
                                    onPress={()=>{
                                        this.setState({
                                            alertColor:'#005289',
                                            selected:'alert',
                                            trackingColor:'white',
                                            trackingTextColor:'black',
                                            alertTextColor:'white'
                                        })
                                    }} 
                                    style={{padding:10,backgroundColor:this.state.alertColor,borderRadius:10}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('./common/images/alert_icon/alerts-icon.png')} />
                                        <Text style={{fontSize:16,textAlign:'center',marginLeft:20,color:this.state.alertTextColor}}>ALERTS</Text>
                                    </View>
                                    </TouchableHighlight>
                                </View>
                        </View>
                        <View style={{flex:1}}>
                        {
                            this.state.selected=='tracking'?<TrackingDashboard />:<AlertDashboard />
                        }
                            
                        </View>
                       
                    </View>
                )
            }
    }
        
        const styles=StyleSheet.create({
            container:{
             flex:1,
             backgroundColor:'#EDF6FC'
            },
            containerPie: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-around',
              },
              gauge: {
                position: 'absolute',
                width: 250,
                height: 160,
                alignItems: 'center',
                justifyContent: 'center',
              },
              gaugeText: {
                backgroundColor: 'transparent',
                fontSize: 16,
                textAlign:'center',
                fontWeight:'bold'
              },
              mainTabContainer:{
                  flexDirection:'row',
                  justifyContent:'center',
                  padding:10,
                  borderRadius:20},
              mainTabs:{
                  padding:10,
                  backgroundColor:'white',
                  borderRadius:10
                }
        })