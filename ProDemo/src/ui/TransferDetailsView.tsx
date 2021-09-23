import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {getReviewData} from '../store/actions/ReviewActions';
import { CardStyle } from './style/ReviewCardStyle';
import { styleSpaceBetweenFlexRow, textStyle } from './style/ViewStyle';
import { EditButton } from './EditButton';
import { Product, Root } from '../api/model/ReviewModel';
import ReviewRowFlatList from './RowFlatList';

type AppProp ={
  product:Product
  getReviewData:(data:Root)=>void
}

const TransferDetailsView =(props:AppProp)=>{
  const product = props.product;
  const transactionRowList =
  [{title:"You're sending", value:''+product.origination.principalAmount, currenyType:"CAD"},
  {title:'Exchange rate', value: ''+product.exchangeRate, superScriptValue:'2', currenyType :"INR"},
  {title:'Receiver gets', value:''+product.destination.expectedPayoutAmount, superScriptValue:'1,2,5,15', currenyType: "INR"},
  {title:"row divider",value:"gray"},
  {title:'Our fees', value: ''+product.fees, superScriptValue:'2,5', currenyType:"CAD"},
  {title:'Promo code',value:'-5.00 CAD',valueTextColor:'#4b8158', currenyType :"CAD"},
  {title:"Total you pay",value:"102.5",valueTextColor:'black'},
  {title:'Payment method', value:''+product.type, superScriptValue:'3'},
  {title:'To', value:'India'},
  {title: 'Delivery by', value:'Cash pickup', superScriptValue:'6,15'},
  {title: 'Available', value:'In minutes'}
];
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
        {/* inflate row */}
        <ReviewRowFlatList rowList ={transactionRowList} />
        
        <View style={{height: 10}}></View>
        <View style={{flex: 0}}>
          {/* Edit button touch */}
          <EditButton/>
        </View>
      </View>
    );
  }
  

function mapStateToProps(state:Root) {
  console.log('mapStateToProps TransferDetailsView',state);
  return {
    product: state.order.product
  };
}

export default connect(mapStateToProps, {
  getReviewData,
})(TransferDetailsView);

