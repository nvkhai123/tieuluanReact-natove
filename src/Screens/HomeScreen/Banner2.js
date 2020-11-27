import React, { Component } from 'react'
import { Text, View , Dimensions,StyleSheet, Image} from 'react-native'
import Swiper from 'react-native-swiper';
// import Banner from '/components/images/banner.jpg'


const { height } = Dimensions.get("window");

export default class Banner extends Component {
    render() {
        
        return (
            <Swiper autoplay= {true} horizontal={true} autoplayTimeout={7}  style = {styles.wraper} >
                <View>
                <Image source={require('./img/category1.jpg')} 
                    // style = {{width:height/1.98, height:height*0.2}}
                    // style = {{padding:10, width:350, height:150}}
                    style = {styles.imgBanner}
                />
                </View>
                <View>
                <Image source={require('./img/category4.jpg')} 
                    // style = {{width:height/1.98, height:height*0.2}}
                    // style = {{padding:10, width:350, height:150}}
                    style = {styles.imgBanner}
                />
                </View>
                
                
                
            </Swiper>
        )
    }
}
 
const styles  = StyleSheet.create({
    wraper:{
        height : height * 0.2,
        backgroundColor : "white",
        margin:7,
        shadowColor:'#2E272D',
        shadowOffset: {width: 0 , height: 3 },
        shadowOpacity:0.2,

        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,

    },
    imgBanner:{
        width:height/1.6, height:height*0.2,
        backgroundColor : "white",
        margin:1,
        shadowColor:'#2E272D',
        shadowOffset: {width: 0 , height: 3 },
        shadowOpacity:0.2,

        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    }


})


