import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class RowView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {title, value, superScriptValue, valueTextColor,currenyType=''} = this.props;
    return (
      <View
        style={{
          flex: 0,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}>
            {/*View to wrap multiple text*/}
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                lineHeight: 30,
                color: 'gray',
              }}>
              {title}
            </Text>
            {/*Superscript*/}
            <Text
              style={{
                fontSize: 10,
                fontWeight: '600',
                lineHeight: 18,
                color: 'gray',
              }}>
              {superScriptValue}
            </Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              fontWeight: '600',
              color: valueTextColor ? valueTextColor : 'black',
            }}>
            {value+" "+currenyType}
          </Text>
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

export default RowView;
