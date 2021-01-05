import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import DemoList from "./DemoList";

// Data Source
// let arr = ['a', 'b', 'c', 'd'] // String Array
// let dict = {name:'a', age:12}  // Dictionary: dict.name -> a | dict.age -> 12

// const friends = [
//   {name:'Krunal', key:1},
//   {name:'Sebastian', key:2},
//   {name:'Kevin', key:3},
//   {name:'Sahild', key:4},
//   {name: 'Zyou', key:5},
//   {name: 'Eli', key:6},
//   {name: 'Aida', key:7},
//   {name: 'Alok', key:8},
//   {name: 'Lokesh', key:9},
// ]

// array.forEach(element => {  // element = {name:'Krunal'}
//   // print -> element.name
//   <Text> Hi everyone, how are you? </Text>
//   <Text> {element.name} </Text>
// })

const App = () => {
  return <DemoList/>
  //     ( <FlatList
  //       data = {friends}
  //       renderItem = {({item}) => {
  //         // element = {item:{name:shobhakar}, index:0}
  //         // and then item : {name:shobhakar}
  //         return <Text styles={styles.textStyle}> {item.name} </Text>
  //       }}
  //     />
  // );
}

export default App

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 150,
    marginLeft: 150,
    marginTop: 150
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
