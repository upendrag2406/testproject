

import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, Text, View, FlatList, ScrollView, Modal, StyleSheet, TextInput } from 'react-native';
import { setProducts } from './src/redux/actions/productActions';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"
import HomeScreen from './src/redux/Components/HomeScreen';

const App = () => {
  return(

    <HomeScreen/>
  )
}



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default App;