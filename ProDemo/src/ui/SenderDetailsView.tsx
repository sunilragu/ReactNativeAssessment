import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ImageLeft from './ReviewSenderImageLeft';
import { CardStyle } from './style/ReviewCardStyle';
import { justifyView, imaageBackground, styleSpaceBetweenFlexRow, textStyle } from './style/ViewStyle';
import SenderHeaderView from './SenderHeaderView';
import { Sender } from '../api/model/ReviewModel';
import ReviewRowFlatList from './RowFlatList';



// Sender details function compnant 
export default function SenderDetailsView(props:Sender) {

  const { name, address, email } = props;

  const rowListData = [{title:'Sender is' ,value: name.first + " " + name.middle},
   {title:'At' ,value:address.addressLine1 + " " + address.city + " " + address.postalCode},
   {title:'Email address' ,value:email},
   {title:'Phone' ,value:'11234567898'}];
  
  return (
    <View
      style={CardStyle.card}>
      {/* sender top header view */}
      <SenderHeaderView name={name.first + " " + name.middle}/>

      <View style={{ height: 5 }}></View>
      <View style={{ height: 2, backgroundColor: '#f5f4f6' }}></View>
      <View style={{ height: 20 }}></View>

      {/* <RowView {...{title:'Sender is' ,value: name.first + " " + name.middle}} />
      <RowView title={'At'} value={address.addressLine1 + " " + address.city + " " + address.postalCode} />
      <RowView title={'Email address'} value={email} />
      <RowView title={'Phone'} value={'+11234567898'} /> */}
      
      <ReviewRowFlatList rowList ={rowListData} />

      <View style={{ height: 10 }}></View>


    </View>
  );

}





