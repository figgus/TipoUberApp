import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,SafeAreaView} from 'react-native';
import {GetUrlApi} from '../TipoUberApp/Funciones/FuncionesGlobales';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Index from './components/Index/Index';
import Map from './components/Map/Mapa';

const Drawer=createDrawerNavigator();
export default function SideNav() {
  
  return (
      <NavigationContainer styles={styles}>
        <Drawer.Navigator>
          <Drawer.Screen name="Mapa" component={Map}/>
          <Drawer.Screen name="Home" component={Index}/>
        </Drawer.Navigator>
      </NavigationContainer>
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

