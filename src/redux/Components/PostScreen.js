

import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, Text, View, FlatList, ScrollView, Modal, StyleSheet, TextInput } from 'react-native';
import { setProducts } from '../../redux/actions/productActions';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"

const PostScreen = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {

    const response = await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .catch((err) => {
        console.log("Err", err)
      });
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (

    <SafeAreaView style={{ flex: 1 }}>
            <TextInput
              placeholder="Title"
              style={{ height: 40, borderBottomWidth: 1, width: '100%' }}

            />
            <TextInput
              placeholder="Body"
              style={{ height: 40, borderBottomWidth: 1, width: '100%' }}

            />
            <Button
              title="Save Post"
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            />

    </SafeAreaView>


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


export default PostScreen;