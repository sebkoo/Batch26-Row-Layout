import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import DemoList from "./src/components/DemoList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DemoList/>
      <StatusBar style='auto'></StatusBar>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
