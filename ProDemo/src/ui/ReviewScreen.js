import React, { Component } from 'react';
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

import { getReviewData } from '../ui/actions/ReviewActions';
import IconWU from './IconWU';
import Response from '../api/response.json';
import ImageArrowRight from './ImageArrowRight';
import * as ViewStyle from './style/ViewStyle';

class ReviewScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.getReviewData(Response);

  }
  // render screen 
  render() {
    let { reviewData } = this.props.reviewDataModel;

    if (!reviewData) {
      return (<View style={
        ViewStyle.styleNoDataFound.centerScreen
      }>
        <Text style={ViewStyle.textStyle.textBold}>No data found!</Text>
      </View>);
    }

    let { sender, order } = reviewData;
    // retuen the main root view which will be renderd on the UI
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={ViewStyle.stylesOuter.outerView}>
          {/* top WU icon */}

          <View style={
            ViewStyle.styleTopHeaderView.topHeader
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
                    ViewStyle.styleReviewRow.review
                  }>
                  <Text style={ViewStyle.textStyle.textBold}>Review</Text>
                  <ImageArrowRight></ImageArrowRight>

                </View>

                <View
                  style={
                    {
                      flex: 0,
                    },
                    ViewStyle.centerView
                    }>
                  <Text
                    style={ViewStyle.textStyle.textNormal}>
                    This is not a receipt. Please review your transfer details
                  </Text>
                </View>

                <View style={{ height: 30 }}></View>
                {/* transferdate view */}
                <View
                  style={{
                    ...ViewStyle.styleSpaceBetweenFlexRow,
                    
                  }}>
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

                <SenderDetailsView sender={sender} />

                <View style={{ height: 30 }}></View>

                <SenderIDView complianceData={sender.complianceData} />

                <View style={{ height: 30 }}></View>

              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}


function mapStateToProps(state) {
  console.log('mapStateToProps Review screen');
  return {
    reviewDataModel: state,
  };
}

export default connect(mapStateToProps, {
  getReviewData,
})(ReviewScreen);