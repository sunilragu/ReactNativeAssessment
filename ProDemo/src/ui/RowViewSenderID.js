import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { textStyle } from './style/ViewStyle';

class RowViewSenderID extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {title, IdName, IdNumber} = this.props;
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
              style={
                textStyle.baseText,
                textStyle.reviewSenderRowLeftText
                }>
              {title}
            </Text>
            
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text
            style={{fontSize: 16, lineHeight: 24, fontWeight: '600'}}
            >
            {IdName}
          </Text>
          <Text
            style={{fontSize: 16, lineHeight: 24, fontWeight: '600'}}
            >
              {IdNumber}
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

export default RowViewSenderID;
