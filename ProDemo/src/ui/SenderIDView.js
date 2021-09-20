import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { EditButton } from './EditButton';
import RowView from './RowView';
import SenderHeaderView from './SenderHeaderView';
import { CardStyle } from './style/ReviewCardStyle';
import { centerView, textStyle } from './style/ViewStyle';


class SenderIDView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { documents } = this.props.complianceData;
    //console.log('complianceData---', documents);
    return (
      // card view outer with corner redious
      <View
      style={CardStyle.card}>
      {/* sender top header view */}
      <SenderHeaderView name ={documents[0].docType}/>
        {/* top view end */}
        <View style={{ height: 5 }}></View>
        {/* divider line */}
        <View style={{ height: 2, backgroundColor: '#f5f4f6' }}></View>
        <View style={{ height: 20 }}></View>
        {/* ID text */}
        <View style={{ height: 100, backgroundColor: '#78d6f0', margin: 10, padding: 10 }}>
          <Text style={
            textStyle.baseText,
            textStyle.reviewRowRightText
          }>
            Make sure your ID information is up to date. Don't
            forget to bring your ID with you when paying at an
            agent location.
          </Text>
        </View>
        <View style={{ height: 10 }}></View>

        <RowView title={"Primary ID"} value={documents[0].docType +"\n "+documents[0].docNumber} />

        <View style={{ height: 30 }}></View>

        <View style={{ flex: 0, ...centerView }}>
          {/* Edit button */}
          <EditButton></EditButton>
        </View>
        <View style={{ height: 20 }}></View>
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
