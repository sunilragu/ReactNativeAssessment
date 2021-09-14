import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import RowView from './RowView';
import RowViewSenderID from './RowViewSenderID';

class SenderIDView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let{documents} = this.props.complianceData;
    console.log('complianceData---',documents);
    return (
      // card view outer with corner redious
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

              {/* image view circle */}

            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'black',
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
              Sender's ID information
            </Text>
            <View style={{height: 5}}></View>
            <Text style={{fontSize: 18, lineHeight: 20, fontWeight: '600'}}>
              { documents[0].docType}
            </Text>
          </View>
          
        </View>
        {/* top view end */}
        <View style={{height: 5}}></View>
        {/* divider line */}
        <View style={{height: 2, backgroundColor: '#f5f4f6'}}></View>
        <View style={{height: 20}}></View>
        {/* ID text */}
        <View style={{height:100, backgroundColor: '#78d6f0',margin:10,padding:10}}>
        <Text style={
          {fontSize: 16,
           lineHeight: 18, 
           fontWeight: '600'
           
           }}>
              Make sure your ID information is up to date. Don't
              forget to bring your ID with you when paying at an
              agent location.
            </Text>
        </View> 
        <View style={{height: 10}}></View>

        <RowViewSenderID title={"Primary ID"} IdName={ documents[0].docType} IdNumber={ documents[0].docNumber } />

        <View style={{height: 50}}></View>
        <View style={{flex: 0, justifyContent: 'center',alignItems:'center'}}>
        <Text style={{color:'blue',fontSize:18, fontWeight:'600'}}>Edit</Text>
        </View>
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

export default SenderIDView;
