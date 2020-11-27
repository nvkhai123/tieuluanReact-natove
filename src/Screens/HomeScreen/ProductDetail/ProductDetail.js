import React, { Component } from 'react'
import { Text, View , StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'
import Header from '../Header.js'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { rootApi } from '../../../utils/rootApi.js'

export default class ProductDetail extends Component {
    render() {
        console.log(this.props.route.params.item)
        const items = this.props.route.params.item;
        return (

            <View >
                <Header/>
                <ScrollView style = {styles.Container}>
                    <View style = {styles.wrapper}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <View style={styles.title}>
                        <FontAwesome
                                style={{marginRight: 1}}
                                name="chevron-left"
                                size={20}
                                color="#B10D65"
                                />
                            <Text style={styles.titlestyle}>{items.nameType} </Text>
                            <View></View>
                        </View>
                        </TouchableOpacity>
                       
                        <View style={styles.ProductContainer}>
                             <Image source={{uri:`${rootApi}/api/images/product/${items.images}`}} 
                                style = {styles.productImg}
                                // style = {{padding:10, width:350, height:150}}
                             />
                            <View style={styles.productInfo}>
                                <Text style = {styles.textname}>{items.name}</Text>
                                <Text style = {styles.textprice}>{items.price}</Text>
                                <View style={styles.final}>
                                
                                <Text style = {styles.textbuynow}>  AddCart  </Text>
                                </View>
                            </View>

                        </View>
                       <View style={styles.description}>
                           <Text style={styles.texttitleDes}> Mô Tả Sản Phẩm</Text>
                           <Text style={styles.mota}>{items.description} </Text>
                       </View>
                        
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        
        backgroundColor:'#DBDBD8',
        padding:1,
    },
    title:{
        flexDirection:"row",
        height:50,
       justifyContent:'space-between', 
       padding:12,    
          
    },
    wrapper:{
        backgroundColor:"#fff",
        margin:7,
        paddingHorizontal:7,

    },
    titlestyle:{
        fontFamily:'Avenir',
        color:'#B10D65',
        fontSize:20,

    },
    ProductContainer:{
        flex:1,
        flexDirection:'row',
       borderTopColor:'#D6D6D6',
        borderWidth:2,
        borderRightColor:'#FFF',
        borderBottomColor:'#FFF',
        borderLeftColor:'#FFF',
       
        
    },
    productImg:{
        marginLeft:20,
        height:70*300/200,
        width:110,
    },
    productInfo:{
        padding:10,
        marginRight:55,

    },  
    textname:{
        padding:5,
        margin:1,
        
        fontFamily:'Avenir',
        color:'green',
        fontSize:22,
        fontWeight:'500',
    },
    textprice:{
        marginBottom:20,
        textAlign:"center",
        margin:1,
        color:'red',
        fontSize:30,

    },
   
    final:{
        flexDirection:'row',    
        // textAlign:'right',
        justifyContent:"center",
        color:"#B10D65",
       
    },
    textbuynow:{
        textAlign:'right',
        justifyContent:"center",
        color:"#FFF",
        marginLeft:5,
        fontSize:25,
        backgroundColor:"#ff6666",
        borderBottomWidth:1,
        borderTopWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderColor:"red"
      
        
    },
    textaddcart:{
    backgroundColor:"#ffe6e6",
    padding:1,
    fontSize:20,
    borderBottomWidth:1,
    borderTopWidth:1,
    borderRightWidth:1,
    borderLeftWidth:1,
    color:"#ff6666",
    borderColor:"red"
},
description:{
    // backgroundColor:"red",
    paddingTop:20,
    borderTopColor:"black",
    borderTopWidth:1,
    
},
texttitleDes:{
    fontSize:20,
},
mota:{
    paddingTop:20,
    fontSize:20,
}

})