import React,{Component} from 'react';
import {View,
    Text,
    StyleSheet, 
    TouchableHighlight, 
    Image,ScrollView,
    TouchableWithoutFeedback,
    BackHandler,
    AsyncStorage,
    ActivityIndicator,
    Alert} from 'react-native';
import Menu_Logo from './common/images/menu-icon@0,5x.png';
import {LOGIN_RESPONSE,USERNAME,PASSWORD,URL} from './common/constants'
import Notification_Logo from './common/images/notification-icon@0,5x.png';
import Countlayout from './common/count'
//require('./common/sample.json')
export default class alertDashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            obdDashboardData:{}
        }
        
    }
    handleBackButtonClick() {
        console.log("login inside back handler")
        BackHandler.exitApp();
        return true;
    }
    
    componentDidMount(){
        console.log("calling conponent  didmount")
            AsyncStorage.multiGet([LOGIN_RESPONSE,USERNAME,PASSWORD],(err,resultset)=>{
                console.log(resultset)
                this.getAlertDashBoardData(resultset[1][1],resultset[2][1]);
            })
        }

    getAlertDashBoardData(username,password){
        const DASHBOARD_URL = URL + '{"username":"'+username+'","password": "'+ password + '","clientid": "CLIENT_1ZF","event":"OBDDASHBOARD"}'
        
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
                    this.setState({obdDashboardData:json})
                  console.log(DASHBOARD_URL,"obd dashboard",json)
                })
            }).catch((error) => {
              console.error(error,'error');
            });
      
    }


    render(){
        if(!this.state.obdDashboardData.hasOwnProperty('data_dash'))
        return <ActivityIndicator style={[styles.loading]}
                    size="large"
                    color="#018ABD"
                />  
        let data=this.state.obdDashboardData.data_dash;
         
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.rowContainer}>
                        <View style={styles.rowItemContainer}>
                            <TouchableWithoutFeedback>
                                <Image style={styles.image} source={require('./common/images/engine/Eninge-icon.png')}  />
                            </TouchableWithoutFeedback>
                            <Text style={styles.imageTitle}>Engine</Text>
                            <Countlayout count={data.engine.engine_count}/>
                        </View>
                        <View style={styles.rowItemContainer}>
                            <TouchableWithoutFeedback>
                                <Image style={styles.image} source={require('./common/images/battery_icon_big/battery-icon-big.png')}  />
                            </TouchableWithoutFeedback>
                            <Text style={styles.imageTitle}>Battery</Text>
                            <Countlayout count={data.battery.battery_count}/>
                        </View>
                        <View style={styles.rowItemContainer}>
                                <TouchableWithoutFeedback onPress={()=>{Alert.alert("clicked on fuel station")}} >
                                    <Image style={styles.image} source={require('./common/images/fuel_station/fuel-station-icon.png')}  />
                                </TouchableWithoutFeedback>
                                <Text style={styles.imageTitle}>Fuel</Text>
                                <Countlayout count={data.fuel.fuel_count}/>
                            </View>
                    </View> 
                    <View style={styles.rowContainer}>
                        <View style={styles.rowItemContainer}>
                            <TouchableWithoutFeedback>
                                <Image style={styles.image} style={styles.image} source={require('./common/images/service_icon/service-icon.png')}  />
                            </TouchableWithoutFeedback>
                            <Text style={styles.imageTitle}>Service</Text>
                            <Countlayout count={data.service.service_count}/>
                        </View>
                        <View style={styles.rowItemContainer}>
                            <TouchableWithoutFeedback>
                                <Image style={styles.image} source={require('./common/images/towing_icon/towing-icon.png')}  />
                            </TouchableWithoutFeedback>
                            <Text style={styles.imageTitle}>Towing</Text>
                            <Countlayout count={data.towing.towing_count}/>
                        </View>
                        <View style={styles.rowItemContainer}>
                                <TouchableWithoutFeedback onPress={()=>{Alert.alert("clicked on fuel station")}} >
                                    <View style={[styles.image,styles.circularView]}>
                                    </View>
                                </TouchableWithoutFeedback>
                                <Text style={styles.imageTitle}>dtc</Text>
                                <Countlayout count={data.dtc.dtc_count}/>
                        </View>
                    </View> 
                    <View style={styles.rowContainer}>
                        <View style={styles.rowItemContainer}>
                            <TouchableWithoutFeedback onPress={()=>{Alert.alert("clicked on fuel station")}} >
                                <View style={[styles.image,styles.circularView]}>
                                </View>
                            </TouchableWithoutFeedback>
                            <Text style={styles.imageTitle}>Milege</Text>
                            <Countlayout count={data.milege.milege_count}/>
                        </View>
                        <View style={styles.rowItemContainer}>
                            <TouchableWithoutFeedback onPress={()=>{Alert.alert("clicked on fuel station")}} >
                                <View style={[styles.image,styles.circularView]}>
                                </View>
                            </TouchableWithoutFeedback>
                            <Text style={styles.imageTitle}>Harsh Driving</Text>
                            <Countlayout count={data.harshdriving.harshdriving_count}/>
                        </View>
                        <View style={styles.rowItemContainer}>
                            <TouchableWithoutFeedback onPress={()=>{Alert.alert("clicked on fuel station")}} >
                                <View style={[styles.image,styles.circularView]}>
                                </View>
                            </TouchableWithoutFeedback>
                            <Text style={styles.imageTitle}>Panic</Text>
                            <Countlayout count={data.panic.panic_count}/>
                        </View>
                    </View> 
                    <View style={styles.rowContainer}>
                        <View style={styles.rowItemContainer}>
                            <TouchableWithoutFeedback onPress={()=>{Alert.alert("clicked on fuel station")}} >
                                <View style={[styles.image,styles.circularView]}>
                                </View>
                            </TouchableWithoutFeedback>
                            <Text style={styles.imageTitle}>Over Speed</Text>
                            <Countlayout count={data.overspeed.overspeed_count}/>
                         </View>
                         <View style={styles.rowItemContainer}>
                            <TouchableWithoutFeedback onPress={()=>{Alert.alert("clicked on fuel station")}} >
                                <View style={[styles.image,styles.circularView]}>
                                </View>
                            </TouchableWithoutFeedback>
                            <Text style={styles.imageTitle}>Device Health</Text>
                            <Countlayout count={data.devicehealth.devicehealth_count}/>
                        </View>
                        <View style={styles.rowItemContainer}>
                            <TouchableWithoutFeedback onPress={()=>{Alert.alert("clicked on fuel station")}} >
                                <View style={[styles.image,styles.circularView]}>
                                </View>
                            </TouchableWithoutFeedback>
                            <Text style={styles.imageTitle}>Misshandling</Text>
                            <Countlayout count={data.misshandling.misshandling_count}/>
                        </View>
                    </View> 
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EDF6FC'
    },
    rowContainer:{
        padding : 5,
        flexDirection:'row'
    },
    rowItemContainer:{
        padding:15,
        flex:1,
        alignItems:'center'
    },
    image:{
        width:80,
        height:80
    },
    imageTitle:{
        fontSize : 16,
        padding : 5
    },
    circularView:{
        borderRadius:80/2,
        borderWidth:1,
        borderColor:'#F26F30'
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
})