import { StatusBar, StyleSheet } from "react-native";

export const textStyle = StyleSheet.create({

  baseText: {
    fontFamily: 'Cochin'

  },
  reviewRowLeftText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 30,
    color: 'gray'
  },
  reviewRowRightText: {

    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',

  },
  reviewSenderRowLeftText: {

    fontSize: 14,
    fontWeight: '600',
    lineHeight: 28,
    color: 'gray',

  },
  subScriptText: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 18,
    color: 'gray',
  },
  textBold:
  {
    fontSize: 30, fontWeight: 'bold'
  },
  textLarge: {
    fontSize: 22, lineHeight: 24, fontWeight: '600'
  },
  textNormal: {
    fontSize: 18, lineHeight: 24, fontWeight: '600'
  },
  textSmall:{
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
  }

});


export const imageStyle = StyleSheet.create({
  imgView: {
    paddingTop: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export const scrollViewStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    width: '80%',
    maxHeight: '30%',
    backgroundColor: 'yellow',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
});

export const stylesOuter = StyleSheet.create({
  outerView: {
    flex: 1,
    backgroundColor: '#f5f4f6',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

// center view
export const centerView = {
  justifyContent: 'center',
  alignItems: 'center',
}

// spece between in items
export const speceBetweenAlginCenter = {

  justifyContent: 'space-between',
  alignItems: 'center'
}

export const styleNoDataFound = StyleSheet.create({
  centerScreen: {
    ...centerView,
    flexDirection: 'column',
    flex: 1,
  }
}
);

// Top Headr view style
export const styleTopHeaderView = StyleSheet.create({
  topHeader: {
    height: 70,
    backgroundColor: 'black',
    ...centerView
  }
});

// review row top text
export const styleReviewRow = StyleSheet.create({
  review: {
    ...speceBetweenAlginCenter,
    height: 110,
    flexDirection: 'row',
  }
});

// Date of transfer
export const styleSpaceBetweenFlexRow = 
  {
    ...speceBetweenAlginCenter,
    flexDirection: 'row',
    flex:0,
}
// flex direct row view in center
export const imaageBackground = StyleSheet.create({
   circleView:{
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'

  }
});
