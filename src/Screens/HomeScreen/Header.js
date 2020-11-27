import React, { Component } from 'react'
import { Dimensions, Text, View ,TouchableOpacity,TextInput, Image, StyleSheet } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'


const { height }  = Dimensions.get('window');
export default class Header extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.row1}>
          <TouchableOpacity >
            <FontAwesome
              style={{marginLeft: 1}}
              name="home"
              size={30}
              color="white"
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Avneir',
                fontSize:25,
              }}>
              {' '}
              KFOOD
            </Text>
          </View>
          <TouchableOpacity  onPress={() =>this.props.navigation.navigate("CartView")}>
            <FontAwesome
              style={{marginRight: 1}}
              name="shopping-cart"
              size={26}
              color="white"
            />
          </TouchableOpacity>
        </View>
        
            <TextInput style= {styles.TextInput} placeholder = "what do you want to buy ? "
           />
       
        <View>
  
        </View>
   
      </View>
    );
  }
}


const styles= StyleSheet.create({
  Container:{
    backgroundColor:"green",
    padding:7,
    height : height /7, 
    justifyContent:"space-around",

  },
  
  
  row1:{
    justifyContent: "space-between",
    
    flexDirection:"row",
 
    
  },
  TextInput:{
    // height: height / 25, 
    margin: 5,
    height: 35,
    backgroundColor:"white",
    color:"red",
    
    
  },

})