import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import RowView from './RowView';

class TransferDetailsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {product} = this.props;
    console.log('review data product...',product.name);

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
        <View style={{flex: 0, padding: 15}}>
          <View style={{height: 5}}></View>
          <Text style={{fontSize: 22, lineHeight: 24, fontWeight: '600'}}>
            Transfer details
          </Text>
        </View>
        <View style={{height: 2, backgroundColor: '#f5f4f6'}}></View>
        <View style={{height: 10}}></View>

        <RowView title={"You're sending"} value={product.origination.principalAmount} currenyType ={"CAD"} />
        <RowView title={'Exchange rate'} value={product.exchangeRate} superScriptValue={'2'} currenyType ={"INR"}/>
        <RowView title={'Receiver gets'} value={product.destination.expectedPayoutAmount} superScriptValue={'1,2,5,15'} currenyType ={"INR"}/>

        <View style={{height: 10}}></View>
        <View
          style={{
            height: 2,
            marginHorizontal: 15,
            backgroundColor: '#f5f4f6',
          }}></View>
        <View style={{height: 10}}></View>
        <RowView title={'Our fees'} value={product.fees} superScriptValue={'2,5'} currenyType ={"CAD"}/>
        <RowView title={'Promo code'} value={'-5.00 CAD'} valueTextColor={'#4b8158'} currenyType ={"CAD"}/>
        <View style={{height: 10}}></View>

        <View
          style={{
            flex: 0,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'black',
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 24,
              fontWeight: '600',
              color: 'white',
            }}>
            Total you pay
          </Text>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 24,
              fontWeight: '600',
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

        <RowView title={'Payment method'} value={product.type} superScriptValue={'3'}/>
        <RowView title={'To'} value={'India'} />
        <RowView title={'Delivery by'} value={'Cash pickup'} superScriptValue={'6,15'}/>
        <RowView title={'Available'} value={'In minutes'} />

        <View style={{height: 10}}></View>
        <View style={{flex: 0}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
            }}>
            <Text
              style={{
                fontSize: 18,
                lineHeight: 24,
                fontWeight: '600',
                color: 'blue',
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
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

export default TransferDetailsView;
