import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {styleSpaceBetweenFlexRow, textStyle} from './style/ViewStyle';

const RowView =(props)=> {
  
    let {title, value, superScriptValue, valueTextColor,currenyType=''} = props;
    return (
      <View
        style={{
          ...styleSpaceBetweenFlexRow,
          paddingHorizontal: 15,
          paddingVertical: 10,
          
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}>
            {/*View to wrap multiple text*/}
            <Text
              style={
                textStyle.baseText,
                textStyle.reviewRowLeftText
              }
              >
              {title}
            </Text>
            {/*Superscript*/}
            <Text
              style={textStyle.subScriptText}>
              {superScriptValue}
            </Text>
          </View>
        </View>
        {/* right row text price details */}
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text
            style={
              textStyle.baseText,
              textStyle.reviewRowRightText,
              {color: valueTextColor ? valueTextColor : 'black'}

            }>
            {value+" "+currenyType}
          </Text>
        </View>
      </View>
    );
  }



export default RowView;
