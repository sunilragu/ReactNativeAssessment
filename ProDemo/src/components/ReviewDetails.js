
import React from "react";
import { Component } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";

import { imageStyle, scrollViewstyles, textInputStyle, textStyle } from "../style/ViewStyle";


class ReviewDetails extends Component{

    constructor(props){
        super(props);
    }
    render(){

        return(<SafeAreaView style={{flex: 1}}>
            <View style={styles.outerView}>
              <View style={{height: 60, backgroundColor: 'green'}}></View>
              <View style={{flex: 1, padding: 15, backgroundColor: 'blue'}}>
                <ScrollView>
                  <View style={{flex: 1}}>
                    <View
                      style={{
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                        borderRadius: 5,
                        backgroundColor: 'red',
                        flexDirection: 'row',
                      }}>
                      <Text>You are sending</Text>
                      <Text>100.00 CAD</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </SafeAreaView>);
        
    }
}

export default ReviewDetails;