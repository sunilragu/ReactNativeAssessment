import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import RowView from './RowView';

class TransferDetailsView extends Component {
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
        <View style={{flex: 0, padding: 15}}>
          <View style={{height: 5}}></View>
          <Text style={{fontSize: 22, lineHeight: 24, fontWeight: '600'}}>
            Transfer details
          </Text>
        </View>
        <View style={{height: 2, backgroundColor: '#f5f4f6'}}></View>
        <View style={{height: 10}}></View>

        <RowView title={"You're sending"} value={'100.00 CAD'} />
        <RowView title={'Exchange rate'} value={'59.5809 INR'} superScriptValue={'2'} />
        <RowView title={'Receiver gets'} value={'5958.09 INR'} superScriptValue={'1,2,5,15'} />

        <View style={{height: 10}}></View>
        <View
          style={{
            height: 2,
            marginHorizontal: 15,
            backgroundColor: '#f5f4f6',
          }}></View>
        <View style={{height: 10}}></View>
        <RowView title={'Our fees'} value={'+7.50 CAD'} superScriptValue={'2,5'}/>
        <RowView title={'Promo code'} value={'-5.00 CAD'} valueTextColor={'#4b8158'}/>
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

        <RowView title={'Payment method'} value={'Credit Card'} superScriptValue={'3'}/>
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
