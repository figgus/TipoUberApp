import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';
import {GetUrlApi} from '../../Funciones/FuncionesGlobales';
import axios from 'axios';

export default function Login(){
    const [nombreUsuario, setNombreUsuario] = useState(''); 
    const [password, setPassword] = useState(''); 

    return (<View >
        <Text>Ingrese sus credenciales</Text>
        <TextInput type="username" onChangeText={(texto)=>{setNombreUsuario(texto)}}/>
        <TextInput type="password" onChangeText={(texto)=>{setPassword(texto)}}/>
        <Button onPress={()=>{ClickIngresar(nombreUsuario,password)}} title="Ingresar"/>
    </View>);
}

async function ClickIngresar(nombre,password) {
    var data={};
    data.username=nombre;
    data.password=password;
    axios.post(GetUrlApi()+`/api/Usuarios/LoginUsuario`,JSON.stringify(data))
      .then(res => {
          console.log(res);
          if(res.data.length>0){
            alert('Login excitoso');
          }
          else{
              alert('Error al logear');
          }
        
      }).catch(()=>{
          alert('se cayo')
      });
  }