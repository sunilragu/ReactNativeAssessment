import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { ComplianceData } from '../api/model/ReviewModel';
import { EditButton } from './EditButton';
import { RowItem } from './RowFlatList';
import SenderHeaderView from './SenderHeaderView';
import { CardStyle } from './style/ReviewCardStyle';
import { justifyView, textStyle } from './style/ViewStyle';

// type AppProp ={
//   documents:ComplianceData
  
// }

const SenderIDView =(props:ComplianceData) => {
  
    let documents = props.documents;
    //console.log('complianceData---', documents);
    return (
      // card view outer with corner redious
      <View
      style={CardStyle.card}>
      {/* sender top header view */}
      <SenderHeaderView name={documents[0].docType}/>
      {/* <SenderHeaderView {...documents[0].docType}/> */}
        {/* top view end */}
        <View style={{ height: 5 }}></View>
        {/* divider line */}
        <View style={{ height: 2, backgroundColor: '#f5f4f6' }}></View>
        <View style={{ height: 20 }}></View>
        {/* ID text */}
        <View style={{ height: 100, backgroundColor: '#78d6f0', margin: 10, padding: 10 }}>
          <Text style={[
            textStyle.baseText,
            textStyle.reviewRowRightText]
          }>
            Make sure your ID information is up to date. Don't
            forget to bring your ID with you when paying at an
            agent location.
          </Text>
        </View>
        <View style={{ height: 10 }}></View>

        <RowItem {...{title: "Primary ID", value: documents[0].docType +"\n "+documents[0].docNumber}} />

        <View style={{ height: 30 }}></View>

        <View style={{ flex: 0 }}>
          {/* Edit button */}
          <EditButton></EditButton>
        </View>
        <View style={{ height: 20 }}></View>
      </View>
    );
  }

export default SenderIDView;
