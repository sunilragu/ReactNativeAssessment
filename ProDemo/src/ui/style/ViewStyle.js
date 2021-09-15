import { StatusBar, StyleSheet } from "react-native";

const textStyle = StyleSheet.create({

    baseText:{
        fontFamily:'Cochin'

    },
    reviewRowLeftText:{
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 30,
        color: 'gray'
    },
    reviewRowRightText:{
      
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        
  },
  reviewSenderRowLeftText:{
    
      fontSize: 14,
      fontWeight: '600',
      lineHeight: 28,
      color: 'gray',
    
},
    subScriptText:{
      fontSize: 10,
      fontWeight: '600',
      lineHeight: 18,
      color: 'gray',
    }
});

const textInputStyle = StyleSheet.create({

    input:{
        height:20,
        margin:20,
        padding:20,
        borderWidth:1,
    },
});

const imageStyle = StyleSheet.create({
    imgView:{
        paddingTop :20,
    },
    logo:{
        width:50,
        height:50,
    },
});

const scrollViewStyle = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      width:'80%',
      maxHeight:'30%',  
      backgroundColor: 'yellow',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 20,
    },
  });

  


export {textStyle,imageStyle,scrollViewStyle};
