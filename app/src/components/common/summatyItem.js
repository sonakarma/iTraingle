import React,{ Component} from 'react';
import {connect} from 'react-redux'
import {summarySelected} from '../../actions'
import {View,Text,StyleSheet,TouchableHighlight, Image,Alert} from 'react-native';

class SummaryItem extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedFlag:false
        }

    }

    renderSubMenu=()=>{
        if(this.state.selectedFlag)
        return <View>
        <TouchableHighlight>
            <View style={styles.subMenu} >
                <View style={styles.subMenuItem}>
                    <Image source={require('../common/images/replay_icon/replay-icon.png')} />
                    <Text style={{color:'white'}}>sxxsx</Text>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                    <Image source={require('../common/images/report_icon/reports-icon.png')} />
                    <Text style={{color:'white',marginLeft:5}}>sxxsx</Text>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                    <Image source={require('../common/images/viewonmap_icon/view_on_map.png')} />
                    <Text style={{color:'white'}}>sxxsx</Text>
                </View>
            </View>
        </TouchableHighlight>

    </View>
    }

    render(){
        return(
        <View style={[styles.containerStyle,{padding:5,backgroundColor:'white'}]}>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <Text>Last packet recieved</Text>
                        <Text style={{color:'black'}}>18:51:56</Text>
                        <Text>Last known Location</Text>
                    </View>
                    <View>
                    <Text style={{backgroundColor:'#1989be',padding:5,color:'#F2F1EF'}}>KA03AD-edwedwdwe3837N</Text>
                    </View>
                </View>
                <Text style={{color:'black'}}>1st and 2nd Floor, #1 Primpark, Primrose Road,off M.G. Road Richmond Town,, Bengaluru, Karnataka 560025</Text>
            </View>
            <View style={{flexDirection:'row',padding:5,backgroundColor:'#F2F1EF',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={styles.greenDot}></View>
                    <Text style={{textAlign:'center',padding:5,color:'black'}}>running</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableHighlight onPress={()=>{
                        this.setState({
                            selectedFlag:!this.state.selectedFlag
                        })
                        this.props.summarySelected('p')}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <View style={styles.threeDot}></View>
                            <View style={styles.threeDot}></View>
                            <View style={styles.threeDot}></View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View>
                {
                    this.renderSubMenu()
                }

            </View>
        </View>
        )
    }
}
const styles=StyleSheet.create({
    containerStyle:{
        flex:1
    },
    threeDot:{
        width:8,
        height:8,
        borderRadius:8/2,
        backgroundColor:'black',
        margin:2
    },
    greenDot:{
        width:8,
        height:8,
        borderRadius:8/2,
        backgroundColor:'green'
    },
    subMenu:{
        flexDirection:'row',
        backgroundColor:'#1989be',
        padding:5
    },
    subMenuItem:{
        flexDirection:'row',
        flex:1
    }
    // containerStyle: {
    //     borderWidth: 1,
    //     borderRadius: 2,
    //     borderColor: '#ddd',
    //     borderBottomWidth: 0,
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 2,
    //     elevation: 1,
    //     marginLeft: 5,
    //     marginRight: 5,
    //     marginTop: 10
    //   }
})

mapPropsToState=({extras},ownProps)=>{
    console.log('inside summary item', extras,ownProps)
    const {summarySelected}=extras;
    return {showMenuFlag:summarySelected}
}

export default connect(mapPropsToState,{summarySelected})(SummaryItem)