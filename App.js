import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Index from './components/Index/Index';
import Map from './components/Map/Mapa';
import Login from './components/Login/Login';

const Drawer=createDrawerNavigator();
export default function App() {
  
  return (
      <SafeAreaView>
        <Login />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:'10px'
  },
});




