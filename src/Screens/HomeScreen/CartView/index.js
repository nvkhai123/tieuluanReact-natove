import React, { Component } from 'react'
import { Text, View,StyleSheet ,TouchableOpacity, Image,TextInput, ScrollView} from 'react-native';
import { color } from 'react-native-reanimated';


import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class index extends Component {
    render() {
        return (
            <ScrollView>
                <View style= {styles.titles}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <FontAwesome  style={{marginLeft: 15}}name="long-arrow-left" size={30} color="black"  />
                        </TouchableOpacity>
                        <Text style={styles.texttitles}>CartView</Text>
                        <FontAwesome  style={{marginRight: 1}}name="long-arrow-left" size={0} color="black" />
                </View>
                <View style = {styles.banner}>
                        <FontAwesome  style={{marginLeft: 15}}name="map-marker" size={30} color="black"  />
                        
                        <Text style={styles.textbanner}>3/2 Xuan Khanh , Ninh Kieu, Can Tho</Text>
                
                </View>
                <View style={styles.inforProduct}>
                    <Text style={styles.textinfor}>Information Product</Text>
                    <View style={styles.product}>
                            <Image source={require('../img/category2.jpg')} 
                            
                            style = {styles.img}
                             />
                             <View style ={styles.buyProduct}>
                                 <Text style={styles.textname}>name :</Text>
                                 <Text  style={styles.textprice}>price :</Text>
                                 <Text  style={styles.textquatity}>quantity :</Text>
                                 <Text  style={styles.texttongtien}>Total : </Text>
                             </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.textinfor}>Your Information</Text>
                    <View style={styles.inforyour}>
                        <Text style={styles.name}>  Name :</Text>
                      <View style={styles.textinput1}><TextInput placeholder="Your Name" style={styles.TextInput}/></View> 
                    </View>
                    <View style={styles.inforyour}>
                        <Text style={styles.name}>  Email :</Text>
                        <View style={styles.textinput1}><TextInput placeholder="Your Email" style={styles.TextInput}/></View>
                    </View>
                    <View style={styles.inforyour}>
                        <Text style={styles.name}>  Phone :</Text>
                        <View style={styles.textinput1}><TextInput placeholder="Your Phone" style={styles.TextInput}/></View>
                    </View>
                    <View style={styles.inforyour}>
                        <Text style={styles.name}>Address:</Text>
                       <View style={styles.textinput1}><TextInput placeholder="Your address" style={styles.TextInput}/></View>
                    </View>
                    
                    <View style={styles.inforyour}>
                        <Text style={styles.name}>  Note :</Text>
                        
                        <View style={styles.textinput1}><TextInput placeholder="Your Note" style={styles.TextInput}/></View>
                       
                    </View>
                </View>
               <View style={{flexDirection:'row'}}>
               <FontAwesome  style={{marginLeft: 15}} name="fighter-jet" size={40} color="green"  />
               <Text style={{fontSize:20, alignItems:'center',justifyContent:'center', marginLeft:5, color:'green'}}> FreeShips</Text>
               </View>
               <Text style={styles.end}>Đặt Hàng</Text>
            
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create ({
    titles:{
        flexDirection:'row',
        
        backgroundColor:'#ffbf00',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        borderBottomEndRadius:20,
        borderBottomLeftRadius:20,

    },
    texttitles:{
        flex:1,
        fontSize:20,
        textAlign:"center",
        justifyContent:'center',
        color:'white'
    },
    banner:{
        
        flexDirection:'row',
        backgroundColor:'#ffecb3',
        borderTopEndRadius:20,
        borderTopLeftRadius:20,
        alignItems:'center',
    },

    textbanner:{
        fontSize:20,
        margin:10,

    },
    inforProduct:{
        margin:20,
        backgroundColor:"white",
    },
    textinfor:{
        fontSize:30,
        alignItems:'center',
        textAlign:'center',
    },
    product:{
        flexDirection:'row',
        margin:10,
    },
    img:{
        height:150,
        width:150,
    },
    buyProduct:{
        marginLeft:10,
        
        
    },
    textname:{
        fontSize:30,
        color:"green"
    },
    textprice:{
        fontSize:25,
        color:'red',
       marginLeft:50,  
     },
    textquatity:{
        fontSize:20,
        marginLeft:50, 
    },
    texttongtien:{
        fontSize:20,
        marginLeft:50, 
    },
    inforyour:{
        
        flexDirection:'row',
        margin:10,
    },
    name:{
        margin:20,
        fontSize:20
    },
    TextInput:{
      
        
         paddingLeft:15,
        fontSize:20,
    },
    textinput1:{
        flex:1,
        marginLeft:30,
    },
    end:{
        fontSize:30,
        color:"red",
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
       
         backgroundColor:"#ff9999",
        borderBottomWidth:1,
        borderTopWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderColor:"red"
    }


})