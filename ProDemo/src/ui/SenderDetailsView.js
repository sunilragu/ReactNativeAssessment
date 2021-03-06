import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RowView from './RowView';
import ImageLeft from './ReviewSenderImageLeft';

class SenderDetailsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let { name, address, email } = this.props.sender;

    console.log('sender name---', address);
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
        <View style={{ justifyContent: 'space-between', padding: 15, flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>

            <View
              style={{ width: 70, justifyContent: 'center' }}>
              {/* image view circle */}

              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'red',
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center'

                }}>

                <ImageLeft></ImageLeft>

              </View>

            </View>

            <View style={{ flex: 0, justifyContent: 'center' }}>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 24,
                  fontWeight: '500',
                  color: 'gray',
                }}>
                Sender Details
              </Text>
              <View style={{ height: 5 }}></View>
              <Text style={{ fontSize: 18, lineHeight: 20, fontWeight: '600' }}>
                {name.first + " " + name.middle}
              </Text>
            </View>
            </View>
            {/* image arrow right */}
            <View
              style={{

                alignContent: 'center',
                justifyContent: 'center',

              }}
            >
              <ImageArrowRight></ImageArrowRight>
            </View>
          
        </View>

        <View style={{ height: 5 }}></View>
        <View style={{ height: 2, backgroundColor: '#f5f4f6' }}></View>
        <View style={{ height: 20 }}></View>

        <RowView title={'Sender is'} value={name.first + " " + name.middle} />
        <RowView title={'At'} value={address.addressLine1 + " " + address.city + " " + address.postalCode} />
        <RowView title={'Email address'} value={email} />
        <RowView title={'Phone'} value={'+11234567898'} />

        <View style={{ height: 10 }}></View>


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
