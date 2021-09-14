import React, {Component} from 'react';
import {connect} from 'react-redux';
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
import SenderIDView from './SenderIDView';
import TransferDetailsView from './TransferDetailsView';

import {getReviewData} from '../ui/actions/ReviewActions';
import Response from '../api/response.json'

class ReviewScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.getReviewData(Response);
  
  }

  render() {
    let {reviewData} = this.props.reviewDataModel;
    
    console.log('review data...',reviewData);
    if(!reviewData){
      return<View></View>;
    }

    let{sender,order} = reviewData;
    //let{sender} = reviewData;
   
    console.log('review data sender...',sender);

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.outerView}>
          <View style={{height: 30}}></View>
          <View style={{flex: 1, paddingHorizontal: 20}}>
            {/* Scroll view start */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{flex: 1}}>
                {/* top Review text */}
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
                {/* transferdate view */}
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

                <TransferDetailsView product = {order.product}/>

                <View style={{height: 25}}></View>

                <SenderDetailsView sender = {sender}/>

                <View style={{height: 30}}></View>

                <SenderIDView complianceData ={sender.complianceData}/>

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

function mapStoreToProps(state) {
  return {
    reviewDataModel: state,
  };
}

export default connect(mapStoreToProps, {
  getReviewData,
})(ReviewScreen);