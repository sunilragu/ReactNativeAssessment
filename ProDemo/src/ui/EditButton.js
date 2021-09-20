import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { centerView, textStyle } from "./style/ViewStyle";

export const EditButton = () => {
    return (<TouchableOpacity
        style={{
            ...centerView,
            height: 50,
        }}>
        <Text
            style={{
                ...textStyle.textNormal,
                color: 'blue',
            }}>
            Edit
        </Text>
    </TouchableOpacity>);
}
