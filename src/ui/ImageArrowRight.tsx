import React from 'react';
import { Image } from "react-native";

const ImageArrowRight = ()=>{

    return (<Image
        style={{
          resizeMode: "cover",
          height: 30,
          width: 30,

        }}
        source={require("../image/icon.png")}
      />);

}
export default ImageArrowRight;

