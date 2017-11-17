import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import SummaryItem from './common/summatyItem'
 
export default class Summary extends Component {



  render() {
    return (
      <View style={styles.container}>
        <SummaryItem />
        <SummaryItem />
        <SummaryItem />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})