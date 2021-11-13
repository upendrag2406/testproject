

import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, Text, View, FlatList, ScrollView, Modal, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { addProducts, setProducts } from '../../redux/actions/productActions';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"

const HomeScreen = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [filterData, setFilterData] = useState([]);


  const renderList = products.map((product) => {
    const { id, title, body } = product;
   
        return (
          <View key={id} style={{ borderWidth: 1, marginBottom: 10 , padding:10}}>
            <Text style={{fontWeight:'bold'}}>Id - <Text>{id}</Text></Text>
            <Text>Title - {title}</Text>
            <Text>Body - {body}</Text>
          </View>
        )
    
  })

  const fetchProducts = async () => {
    axios({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
    }).then((responseJson) => {
        console.log("POSTTIMELINESUCCESS"+JSON.stringify(responseJson.data))
        
        var filterData = []

        responseJson.data.map((data)=>{

        if(data.id <= 10){
            filterData.push(data)
        }
        })
        callFetchProduct(filterData)
    }).catch(error => {
        console.log("POSTTIMELINECATCH", error)
    });
  }
  const callFetchProduct = (filterData) => {
    dispatch(setProducts(filterData))
  }




  const postProduct = async () => {
      console.log(postTitle)
        if(postTitle == "" || postTitle.trim() == ""){
            alert("Please Enter Title")
        }else if(postBody == "" || postBody.trim() == ""){
            alert("Please Enter Body")
        }else{

            setModalVisible(false)
            
            setPostTitle("")
            setPostBody("")
            var Id = Math.floor(Math.random() * 100)+1 ;
    
            axios({
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'POST',
                data: {
                    title : postTitle,
                    body : postBody,
                    userId : Id
    
                },
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
            }).then((responseJson) => {
                console.log("POSTTIMELINESUCCESS", JSON.stringify(responseJson))
                dispatch(addProducts(responseJson.data))
            }).catch(error => {
                console.log("POSTTIMELINECATCHasdfsf", error)
            });
        }


  }

  useEffect(() => {
    fetchProducts();
  }, [])

  console.log("productsproducts", products.length)

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ padding: 10 }}>
          {renderList}
        </View>
        <Button title='Add Post' onPress={() => setModalVisible(true)} />
      </ScrollView>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >

          
<TouchableOpacity 
style={styles.centeredView}
            onPress={()=>setModalVisible(false)}
            >
          <View style={styles.modalView}>
            <TextInput
              placeholder="Title"
              style={{ height: 40, borderBottomWidth: 1, width: '100%' }}
              onChangeText={(text) => setPostTitle(text)}
              multiline

            />
            <TextInput
              placeholder="Body"
              style={{ height: 40, borderBottomWidth: 1, width: '100%' }}
              onChangeText={(text) => setPostBody(text)}
              multiline

            />
            <Button
              title="Save Post"
              style={[styles.button, styles.buttonClose]}
              onPress={() => postProduct()}
            />

          </View>
        </TouchableOpacity>


      </Modal>
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


export default HomeScreen;