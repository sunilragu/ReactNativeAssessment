import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RowView from './RowView';

class SenderDetailsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 0,
          backgroundColor: '#FFFFFF',
          borderRadius: 5,
          shadowColor: '#e5e9f5',
          shadowOffset: {
            width: 10,
            height: 10,
          },
          shadowRadius: 20,
          shadowOpacity: 1.0,
          elevation: 2,
        }}>
        <View style={{flex: 0, flexDirection: 'row', padding: 15}}>

          <View
            style={{width: 70, justifyContent: 'center'}}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'red',
                borderRadius: 25,
              }}></View>
          </View>

          <View style={{flex: 0, justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 24,
                fontWeight: '500',
                color: 'gray',
              }}>
              Sender Details
            </Text>
            <View style={{height: 5}}></View>
            <Text style={{fontSize: 22, lineHeight: 24, fontWeight: '600'}}>
              Olivia Johnson
            </Text>
          </View>
          
        </View>

        <View style={{height: 5}}></View>
        <View style={{height: 2, backgroundColor: '#f5f4f6'}}></View>
        <View style={{height: 20}}></View>

        <RowView title={'Sender is'} value={'Olivia Johnson'} />
        <RowView title={'At'} value={'54 St, Ontario, Canada, 24081'} />
        <RowView title={'Email address'} value={'olivia.johnson@demo.com'} />
        <RowView title={'Phone'} value={'+11234567898'} />

        <View style={{height: 10}}></View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    backgroundColor: '#f5f4f6',
  },
});

export default SenderDetailsView;
