import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import RowView from './RowView';
import {getReviewData} from '../ui/actions/ReviewActions';
import { CardStyle } from './style/ReviewCardStyle';
import { styleSpaceBetweenFlexRow, textStyle,centerView } from './style/ViewStyle';
import { EditButton } from './EditButton';

const TransferDetailsView =(props)=>{
  let {product} = props;
  console.log('review data product...',product);
 
   return (
    // transfer details header view
      <View
        style={CardStyle.card}>
        <View style={{flex: 0, padding: 15}}>
          <View style={{height: 5}}></View>
          <Text style={textStyle.textLarge}>
            Transfer details
          </Text>
        </View>
        {/* divider line */}

        <View style={{height: 2, backgroundColor: '#f5f4f6'}}></View>

        <View style={{height: 10}}></View>
        {/* infalte row */}
        <RowView title={"You're sending"} value={product.origination.principalAmount} currenyType ={"CAD"} />
        <RowView title={'Exchange rate'} value={product.exchangeRate} superScriptValue={'2'} currenyType ={"INR"}/>
        <RowView title={'Receiver gets'} value={product.destination.expectedPayoutAmount} superScriptValue={'1,2,5,15'} currenyType ={"INR"}/>
      {/* row divider */}
        <View style={{height: 10}}></View>
        <View
          style={{
            height: 2,
            marginHorizontal: 15,
            backgroundColor: '#f5f4f6',
          }}></View>
        <View style={{height: 10}}></View>
        {/* row inflate  */}
        <RowView title={'Our fees'} value={product.fees} superScriptValue={'2,5'} currenyType ={"CAD"}/>
        <RowView title={'Promo code'} value={'-5.00 CAD'} valueTextColor={'#4b8158'} currenyType ={"CAD"}/>
        <View style={{height: 10}}></View>

{/* total you pay text.... */}
        <View
          style={{
            ...styleSpaceBetweenFlexRow,
            backgroundColor: 'black',
            paddingHorizontal: 15,
            paddingVertical: 5,
          }
          }>
          <Text
            style={
              
              {
               ...textStyle.textNormal,
                color: 'white',
              }
          }
            >
            Total you pay
          </Text>
          <Text
            style={{
              ...textStyle.textNormal,
                color: 'white',
            }}>
            102.50 CAD
          </Text>
        </View>

        <View style={{height: 30}}></View>
        <View
          style={{
            height: 2,
            marginHorizontal: 15,
            backgroundColor: '#f5f4f6',
          }}></View>
        <View style={{height: 10}}></View>
{/* total you pay text..... */}
        <RowView title={'Payment method'} value={product.type} superScriptValue={'3'}/>
        <RowView title={'To'} value={'India'} />
        <RowView title={'Delivery by'} value={'Cash pickup'} superScriptValue={'6,15'}/>
        <RowView title={'Available'} value={'In minutes'} />

        <View style={{height: 10}}></View>
        <View style={{flex: 0}}>
          {/* Edit button touch */}
          <EditButton/>
        </View>
      </View>
    );
  }
  

function mapStateToProps(state) {
  console.log('mapStateToProps TransferDetailsView',state);
  return {
    product: state.reviewData.order.product,
  };
}

export default connect(mapStateToProps, {
  getReviewData,
})(TransferDetailsView);

