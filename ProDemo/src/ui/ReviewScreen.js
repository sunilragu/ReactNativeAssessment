import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import SenderDetailsView from './SenderDetailsView';
import SenderIDView from './SenderIDView ';
import TransferDetailsView from './TransferDetailsView';

class ReviewScreen extends Component {
  constructor(props) {
    super(props);

    
  }

  componentDidMount() {
   // console.log('Result======', Result);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.outerView}>
          <View style={{height: 30}}></View>
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{flex: 1}}>
                <View
                  style={{
                    height: 60,
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontSize: 40, fontWeight: 'bold'}}>Review</Text>
                </View>

                <View style={{height: 30}}></View>
                <View
                  style={{
                    flex: 0,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{fontSize: 18, lineHeight: 24, fontWeight: '600'}}>
                    This is not a receipt. Please review your transfer details
                  </Text>
                </View>

                <View style={{height: 30}}></View>
                <View
                  style={{
                    flex: 0,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 18, lineHeight: 24, fontWeight: '600'}}>
                    Date of transfer
                  </Text>
                  <Text
                    style={{fontSize: 18, lineHeight: 24, fontWeight: '600'}}>
                    07/15/2021
                  </Text>
                </View>

                <View style={{height: 30}}></View>

                <TransferDetailsView />

                <View style={{height: 25}}></View>

                <SenderDetailsView />

                <View style={{height: 30}}></View>

                <SenderIDView />

                <View style={{height: 30}}></View>

              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    backgroundColor: '#f5f4f6',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ReviewScreen;