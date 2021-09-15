import React from 'react';
import { Image } from "react-native";

export default IconWU = ()=>{

    return (<Image
        style={{
          resizeMode: "cover",
          height: 40,
          width: 40,

        }}
        source={require("../image/icon.png")}
      />);

}