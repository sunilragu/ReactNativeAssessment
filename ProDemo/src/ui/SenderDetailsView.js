import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RowView from './RowView';
import ImageLeft from './ReviewSenderImageLeft';
import { CardStyle } from './style/ReviewCardStyle';
import { centerView, imaageBackground, styleSpaceBetweenFlexRow, textStyle } from './style/ViewStyle';
import SenderHeaderView from './SenderHeaderView';

// Sender details function compnant 
export default function SenderDetailsView(props) {

  let { name, address, email } = props.sender;

  return (
    <View
      style={CardStyle.card}>
      {/* sender top header view */}
      <SenderHeaderView name ={name.first + " " + name.middle}/>

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

