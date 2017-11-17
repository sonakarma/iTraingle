import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager} from 'rn-viewpager';
import Header from './header.js';

export default class ViewOnMap extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Header/>
            <IndicatorViewPager
              style={{ backgroundColor:'red'}}
                    indicator={this._renderTabIndicator()}
                    onPageSelected={this.onPageSelected}

                >
                {this.page1View()}
                
                <View style={{backgroundColor:'green'}}>
                    <Text>page two</Text>
                </View>
            </IndicatorViewPager>
      </View>
    )
  }

  page1View = () => {
    return (
        <View style={{backgroundColor:'blue'}}>
          <Text style={{fontSize : 18}}>page one</Text>
        </View>
      )
  }

    _renderTabIndicator() {
        let tabs = [{
                text: 'Summary'
            },{
                text: 'View on Map'
        }];
        return <PagerTabIndicator tabs={tabs} />;
    }

}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})