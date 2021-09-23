import React from 'react';
import { connect } from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import SenderDetailsView from './SenderDetailsView';
import SenderIDView from './SenderIDView';
import TransferDetailsView from './TransferDetailsView';

import { getReviewData } from '../store/actions/ReviewActions';
import IconWU from './IconWU';
import Response from '../api/response.json'
import ImageArrowRight from './ImageArrowRight';
import * as ViewStyle from './style/ViewStyle';
import { type } from 'os';
import { Root } from '../api/model/ReviewModel';

type AppProp ={
  reviewDataModel:Root
  getReviewData:(data:Root)=>void
}

class ReviewScreen extends React.Component<AppProp> {
  constructor(props:AppProp) {
    super(props);
  }

  componentDidMount() {
    let data = Response as Root;
    //console.log('review screen',data);
    this.props.getReviewData(data);

  }
  // render screen 
  render() {
    let  reviewData  = this.props.reviewDataModel;
    

    if (!reviewData) {
      return (<View style={
        ViewStyle.styleNoDataFound.centerScreen
      }>
        <Text style={ViewStyle.textStyle.textBold}>No data found!</Text>
      </View>);
    }

    let sender = reviewData.sender;
    let complianceData = sender.complianceData;
   // let complianceData = sender.complianceData.complianceType;
    // retuen the main root view which will be renderd on the UI
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={ViewStyle.stylesOuter.outerView}>
          {/* top WU icon */}

          <View style={[
            ViewStyle.styleTopHeaderView.topHeader,ViewStyle.justifyView.centerView]
          }>
            <IconWU></IconWU>
          </View>

          <View style={{ flex: 1, paddingHorizontal: 20 }}>
            {/* Scroll view start */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ flex: 1 }}>
                {/* top Review text */}
                <View
                  style={
                    [ViewStyle.styleReviewRow.review,ViewStyle.justifyView.speceBetweenAlginCenter]
                  }>
                  <Text style={ViewStyle.textStyle.textBold}>Review</Text>
                  <ImageArrowRight></ImageArrowRight>

                </View>

                <View
                style={[{flex:0},ViewStyle.justifyView.centerView]}
                  >
                  <Text
                    style={ViewStyle.textStyle.textNormal}>
                    This is not a receipt. Please review your transfer details
                  </Text>
                </View>

                <View style={{ height: 30 }}></View>
                {/* transferdate view */}
                <View
                  style={[ViewStyle.justifyView.speceBetweenAlginCenter,{flexDirection:'row'}]}
                  >
                  <Text
                    style={ViewStyle.textStyle.textNormal}>
                    Date of transfer
                  </Text>
                  <Text
                    style={ViewStyle.textStyle.textNormal}>
                    07/15/2021
                  </Text>
                </View>

                <View style={{ height: 30 }}></View>

                <TransferDetailsView />

                <View style={{ height: 25 }}></View>

                <SenderDetailsView {...sender} />

                <View style={{ height: 30 }}></View>

                <SenderIDView  {...complianceData} />

                <View style={{ height: 30 }}></View>

              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}


function mapStateToProps(state:Root) {
  //console.log('mapStateToProps Review screen');
  return {
    reviewDataModel: state,
  };
}

export default connect(mapStateToProps, {
  getReviewData,
})(ReviewScreen);