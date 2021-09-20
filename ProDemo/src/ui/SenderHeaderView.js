import React from "react";
import { View, Text } from "react-native";
import ImageArrowRight from "./ImageArrowRight";
import { centerView, imaageBackground, styleSpaceBetweenFlexRow, textStyle } from "./style/ViewStyle";
import ImageLeft from './ReviewSenderImageLeft';

const SenderHeaderView = (props) => {
    let{name} = props;
    return (
        <View style={{ ...styleSpaceBetweenFlexRow, padding: 15 }}>
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
                            ...textStyle.textSmall,
                            color: 'gray',
                        }}>
                        Sender Details
                    </Text>
                    <View style={{ height: 5 }}></View>
                    <Text style={textStyle.textNormal}>
                        {name}
                    </Text>
                </View>
            </View>
            {/* image arrow right */}
            <View
                style={{
                    ...centerView
                }}
            >
                <ImageArrowRight></ImageArrowRight>
            </View>

        </View>
    );
}
export default SenderHeaderView;