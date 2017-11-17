import React,{Component} from 'react';
import {View,Text,
    StyleSheet, 
    ScrollView, 
    TouchableHighlight, 
    Image, 
    StatusBar,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import Header from './header.js';
import {URL,USERNAME,PASSWORD,LOGIN_RESPONSE} from './common/constants'
import Pie from 'react-native-pie'


export default class TrackingDashboard extends Component{
        constructor(props){
            super(props)
            this.state = {
                dashboardData:{},
                flag : false,
                trackingColor: '#e3b604',
                trackingTextColor: 1,
                nonTrackingTextColor: 5,
                nonTrackingColor: '#0f9202',
            }
        }


        componentDidMount(){
                AsyncStorage.multiGet([LOGIN_RESPONSE,USERNAME,PASSWORD],(err,resultset)=>{
                    console.log(resultset)
                    this.getDashBoardData(resultset[1][1],resultset[2][1]);
                })
            }
        
         getDashBoardData(username,password){
             console.log("inside getDashBoardData in tracking dashboard")
                const DASHBOARD_URL = URL + '{"username":"'+username+'","password": "'+ password + '","clientid": "CLIENT_1ZF","event":"DASHBOARD"}'
                
                    fetch(DASHBOARD_URL, {
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
                            this.setState({dashboardData:json})
                          console.log(DASHBOARD_URL,"responce from get dashboard data api",json)
                        })
                    }).catch((error) => {
                      console.error(error,'error');
                    });
              
            }
            renderTracking=(trackingData)=>{
                return <ScrollView style={{backgroundColor : "white"}}>
                <View style={{ marginBottom: 10 }}>
               <View style={{flexDirection:'row'}}>
                    <TouchableHighlight style={{flex:1,
                                    borderBottomColor: '#008BD5',   
                                    borderBottomWidth : 2,                                  
                                        }} onPress={() => {
                                           
                                        }} underlayColor='transparent'>
                                        <View style={{flexDirection:'row'}}>
                                            <Image source={require('./common/images/running.png')} />
                                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                                    <Text style={styles.tabSubHeading}>RUNNING</Text>
                                                    <Text style={styles.tabSubHeadingValue}>{trackingData.Running.run_running}</Text>
                                            </View>
                                    </View>
                                </TouchableHighlight>

                                <TouchableHighlight style={{flex:1,
                                    borderBottomColor: "#8000FF",   
                                    borderBottomWidth : 2,                                  
                                        }} onPress={() => {
                                           
                                        }} underlayColor='transparent'>
                                        <View style={{flexDirection:'row'}}>
                                            <Image source={require('./common/images/halt.png')} />
                                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                                    <Text style={styles.tabSubHeading}>HALT</Text>
                                                    <Text style={styles.tabSubHeadingValue}>{trackingData.Halt.run_halt}</Text>
                                            </View>
                                    </View>
                                </TouchableHighlight>
                        </View>
                        <View style={{flexDirection:'row'}}>
                    <TouchableHighlight style={{flex:1,
                                    borderBottomColor: "#D84342",   
                                    borderBottomWidth : 2,                                  
                                        }} onPress={() => {
                                           
                                        }} underlayColor='transparent'>
                                        <View style={{flexDirection:'row'}}>
                                            <Image source={require('./common/images/nogps.png')} />
                                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                                    <Text style={styles.tabSubHeading}>NO GPS</Text>
                                                    <Text style={styles.tabSubHeadingValue}>{trackingData.Nogps.run_nogps}</Text>
                                            </View>
                                    </View>
                                </TouchableHighlight>

                                <TouchableHighlight style={{flex:1,
                                    borderBottomColor: "#F1B600",   
                                    borderBottomWidth : 2,                                  
                                        }} onPress={() => {
                                           
                                        }} underlayColor='transparent'>
                                        <View style={{flexDirection:'row'}}>
                                            <Image source={require('./common/images/battery.png')} />
                                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                                    <Text style={styles.tabSubHeading}>SECONDARY</Text>
                                                    <Text style={styles.tabSubHeadingValue}>{trackingData.Secondary.run_sec}</Text>
                                            </View>
                                    </View>
                                </TouchableHighlight>
                        </View>
                        <View style={{flexDirection:'row'}}>
                    <TouchableHighlight style={{flex:1,
                                    borderBottomColor: "#484847",   
                                    borderBottomWidth : 2,                                  
                                        }} onPress={() => {
                                           
                                        }} underlayColor='transparent'>
                                        <View style={{flexDirection:'row'}}>
                                            <Image source={require('./common/images/offline.png')} />
                                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                                    <Text style={styles.tabSubHeading}>OFLINE</Text>
                                                    <Text style={styles.tabSubHeadingValue}>{trackingData.Offline.nrun_ofl}</Text>
                                            </View>
                                    </View>
                                </TouchableHighlight>

                               <View style={{flex:1}}>
                                   </View>
                        </View>
                </View>
                </ScrollView>
            }

            renderNonTracking=(nonTrackingData)=>{
               return  <ScrollView style={{backgroundColor : "white"}}>
                        <View style={{ marginBottom: 10 }}>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <TouchableHighlight style={{flex:1,
                                            borderBottomColor: '#008BD5',   
                                            borderBottomWidth : 2,                                  
                                                }} onPress={() => {
                                                
                                                }} underlayColor='transparent'>
                                                <View style={{flexDirection:'row'}}>
                                                    <Image source={require('./common/images/idle.png')} />
                                                    <View style={{justifyContent:'center',alignItems:'center'}}>
                                                            <Text style={styles.tabSubHeading}>IDLE</Text>
                                                            <Text style={styles.tabSubHeadingValue}>{nonTrackingData.Idle.nrun_idle}</Text>
                                                    </View>
                                            </View>
                                        </TouchableHighlight>

                                        <TouchableHighlight style={{flex:1,
                                            borderBottomColor: "#136588",   
                                            borderBottomWidth : 2,                                  
                                                }} onPress={() => {
                                                
                                                }} underlayColor='transparent'>
                                                <View style={{flexDirection:'row'}}>
                                                    <Image source={require('./common/images/nogps.png')} />
                                                    <View style={{justifyContent:'center',alignItems:'center'}}>
                                                            <Text style={styles.tabSubHeading}>NO GPS</Text>
                                                            <Text style={styles.tabSubHeadingValue}>{nonTrackingData.NotRun_NoGPS.nrun_nogps}</Text>
                                                    </View>
                                            </View>
                                        </TouchableHighlight>
                                </View>
                                <View style={{flexDirection:'row'}}>
                            <TouchableHighlight style={{flex:1,
                                            borderBottomColor: "#D84342",   
                                            borderBottomWidth : 2,                                  
                                                }} onPress={() => {
                                                
                                                }} underlayColor='transparent'>
                                                <View style={{flexDirection:'row',padding:10}}>
                                                    <Image source={require('./common/images/ofline.png')} />
                                                    <View style={{justifyContent:'center',alignItems:'center'}}>
                                                            <Text style={styles.tabSubHeading}>DEVICE DEAD</Text>
                                                            <Text style={{
                                                            fontSize: 16,
                                                            color: "black",
                                                            }}>{nonTrackingData.DeviceDead.nrun_dd}</Text>
                                                    </View>
                                            </View>
                                        </TouchableHighlight>

                                        <TouchableHighlight style={{flex:1,
                                            borderBottomColor: "#F1B600",   
                                            borderBottomWidth : 2,                                  
                                                }} onPress={() => {
                                                
                                                }} underlayColor='transparent'>
                                                <View style={{flexDirection:'row',padding:10}}>
                                                    <View style={{justifyContent:'center',alignItems:'center'}}>
                                                            <Text style={styles.tabSubHeading}>NO DATA</Text>
                                                            <Text style={styles.tabSubHeadingValue}>{nonTrackingData.No_Data.nrun_nodata}</Text>
                                                    </View>
                                            </View>
                                        </TouchableHighlight>
                                </View>
                        </View>
                </ScrollView>
            }
        
            renderTab = (data) =>{
              if (this.state.flag) 
                    return this.renderNonTracking(data);
               else
                    return this.renderTracking(data);
                
            }
        
        
            render(){
                if(!this.state.dashboardData.hasOwnProperty("data_dash"))
                return <ActivityIndicator style={[styles.loading]}
                            size="large"
                            color="#018ABD"
                        />  
                const total_count=this.state.dashboardData.data_dash.Total.total_count;
                const nontracking_count= this.state.dashboardData.data_dash.Nontracking.ntracking_count;
                const tracking_count=this.state.dashboardData.data_dash.Tracking.tracking_count;
              
                return(
                    <View style={styles.container}>
                        <View style={{flex:1}}>
                        <View style={styles.containerPie}>
                                <Pie
                                    radius={100}
                                    innerRadius={70}
                                    series={[(tracking_count/total_count)*100,(nontracking_count/total_count)*100]}
                                    colors={['#0f9202','#e3b604']}
                                    backgroundColor='#ddd' />
                                <View style={styles.gauge}>
                                    <Text style={styles.gaugeText}>{this.state.dashboardData.data_dash.Total.total_count}</Text>
                                    <Text style={styles.gaugeText}>TOTAL VEHICLES</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                              <TouchableHighlight style={{
                                  borderBottomColor: this.state.nonTrackingColor,   
                                  borderBottomWidth : this.state.nonTrackingTextColor,                                  
                                  flex: 1,
                                    }} onPress={() => {
                                        this.setState({
                                        flag: false,
                                        trackingColor: '#e3b604',
                                        trackingTextColor: 2,
                                        nonTrackingTextColor: 5,
                                        nonTrackingColor: '#0f9202'
                                        })
                                    }} underlayColor='transparent'>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('./common/images/tracking.png')} />
                                        <View >
                                                <Text style={styles.tabHeading}>TRACKING</Text>
                                                <Text style={styles.tabHeadingValue}>{this.state.dashboardData.data_dash.Tracking.tracking_count}</Text>
                                        </View>
                                </View>
                              </TouchableHighlight>
                              <TouchableHighlight style={{
                                                flex: 1,
                                                borderBottomColor: this.state.trackingColor,
                                                borderBottomWidth : this.state.trackingTextColor,
                                                
                                            }} onPress={() => {
                                                this.setState({
                                                flag: true,
                                                trackingColor: '#e3b604',
                                                trackingTextColor: 5,
                                                nonTrackingTextColor: 2,
                                                nonTrackingColor: '#0f9202'
                                                })
                                            }} underlayColor='transparent'>
                                        <View style={{flexDirection:'row'}}>
                                        <Image source={require('./common/images/non_tracking.png')} />
                                        <View style={{justifyContent:'center'}}>
                                                <Text style={styles.tabHeading}>NON-TRACKING</Text>
                                                <Text style={styles.tabHeadingValue}>{this.state.dashboardData.data_dash.Nontracking.ntracking_count}</Text>
                                        </View>
                                </View>
                              </TouchableHighlight>
                            </View>
                            {
                              this.renderTab(this.state.dashboardData.data_dash)
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
              loading: {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:'#CCFF0000'
              },
              tabHeadingValue:{
                fontSize: 15,
                color:'black'
             },
            tabHeading:{
                fontSize: 15,
            },
            tabSubHeading:{
                fontSize: 12,
            },
            tabSubHeadingValue:{
            fontSize: 10,
            color: "black",
            }
        })