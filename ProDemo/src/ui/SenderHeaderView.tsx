import React from "react";
import { View, Text } from "react-native";
import ImageArrowRight from "./ImageArrowRight";
import { justifyView, imaageBackground, styleSpaceBetweenFlexRow, textStyle } from "./style/ViewStyle";
import ImageLeft from './ReviewSenderImageLeft';
import { type } from "os";

type SenderHeader ={
    name:String
}
const SenderHeaderView = (props:SenderHeader) => {
   // let name = props;
    return (
        <View style={[{ padding: 15,flexDirection:'row' },justifyView.speceBetweenAlginCenter,]}>
            <View style={{ flex: 1, flexDirection: 'row' }}>

                <View
                    style={{ width: 70, justifyContent: 'center' }}>
                    {/* image view circle */}

                    <View
                        style={imaageBackground.circleView}>
                        <ImageLeft></ImageLeft>
                    </View>

                </View>
                {/* sender details text */}
                <View style={{ flex: 0, justifyContent: 'center' }}>
                    <Text
                        style={{
                            color: 'gray',
                        }}>
                        Sender Details
                    </Text>
                    <View style={{ height: 5 }}></View>
                    <Text style={textStyle.textNormal}>
                        {props.name}
                    </Text>
                </View>
            </View>
            {/* image arrow right */}
            <View
                // style={{
                //     ...centerView
                // }}
            >
                <ImageArrowRight></ImageArrowRight>
            </View>

        </View>
    );
}
export default SenderHeaderView;