import { type } from 'os';
import React from 'react';
import {StyleSheet, View, Text,FlatList} from 'react-native';

import {justifyView, styleSpaceBetweenFlexRow, textStyle} from './style/ViewStyle';


 type rowData ={
  title:String,
  value:String,
  superScriptValue?:String,
  valueTextColor?:String,
  currenyType?:String
}
type rowProps={
  rowList:Array<rowData>
}


const ReviewRowFlatList = (props:rowProps)=> {
    
    return (
    <View>
        <FlatList
        data={props.rowList}
        renderItem={({ item }: { item: rowData }) => (
            <RowItem {...item}  />
          )}
       
      />
      </View>
    );
  }

export const RowItem =(props:rowData)=>{
    return(
<View
        >
          {/* transection details row divider */}
        {props.title=='row divider'?
          <RowDivider/>:
         props.title=='Total you pay'?
          <TotalPayRow/>:<TitleMainView {...props}/>
        }
        
      </View>
);}

const TitleMainView =(props:rowData)=>{
  return(
  <View
    style={[justifyView.speceBetweenAlginCenter,justifyView.rowAlignment]}
  >
       <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}>
            {/*View to wrap multiple text*/}
            <Text
              style={[
                textStyle.baseText,
                textStyle.reviewRowLeftText
              ]}
              >
              {props.title}
            </Text>
            {/*Superscript*/}
            <Text
              style={textStyle.subScriptText}>
              {props.superScriptValue}
            </Text>
          </View>
        </View>
        {/* right row text price details */}
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text
            style={[
              textStyle.baseText,
              textStyle.reviewRowRightText,{color:props.valueTextColor?'#4b8158':'black'}]
            }>
            {props.value+" "+(props.currenyType?props.currenyType:'')}
          </Text>
        </View>
   </View>);
}
const RowDivider=()=>{
  
 return(<View>
   <View style={{height: 10}}></View>
   <View
     style={{
       height: 2,
       marginHorizontal: 15,
       backgroundColor: '#f5f4f6',
     }}></View>
   <View style={{height: 10}}></View>
   </View>
   );
}
const TotalPayRow=()=>{
  return(<View>
   <View
          style={ [justifyView.speceBetweenAlginCenter,justifyView.rowAlignment,{
            
            backgroundColor: 'black'
          }]
          }>
          <Text
            style={
              
              {
              
                color: 'white',
              }
          }
            >
            Total you pay
          </Text>
          <Text
            style={{
              ...textStyle.textNormal,
                color: 'white',
            }}>
            102.50 CAD
          </Text>
        </View>

        <View style={{height: 30}}></View>
        <View
          style={{
            height: 2,
            marginHorizontal: 15,
            backgroundColor: '#f5f4f6',
          }}></View>
        <View style={{height: 10}}></View>

  </View>);
}
export default ReviewRowFlatList;
