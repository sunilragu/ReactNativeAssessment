import React from 'react';
import { Image } from "react-native";

const ReviewImageRight = ()=>{

    return (<Image
        style={{
          resizeMode: "cover",
          height: 30,
          width: 30,

        }}
        source={require("../image/icon.png")}
      />);

}
export default ReviewImageRight;