import React, { Component } from 'react'
import { Text, View , Dimensions,StyleSheet, Image} from 'react-native'
import Swiper from 'react-native-swiper';
// import Banner from '/components/images/banner.jpg'


const { height } = Dimensions.get("window");

export default class Banner extends Component {
    render() {
        
        return (
            <Swiper autoplay= {true} horizontal={true} autoplayTimeout={10}  style = {styles.wraper} >
                <View>
                <Image source={{ uri: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/121336099_2495781760719882_6488219166495141745_n.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=wQn36EBJa5gAX_Ot7kK&_nc_ht=scontent.fsgn5-3.fna&oh=400fa9f8f7df1612159e12e1ddcb28c1&oe=5FAAD1A3'}}
                    // style = {{width:height/1.98, height:height*0.2}}
                    // style = {{padding:10, width:350, height:150}}
                    style = {styles.imgBanner}
                />
                </View>
                <View>
                <Image source={{ uri: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/124479365_2520868664877858_4665543059997995280_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=Vqg7vI5U9bkAX-2haHR&_nc_ht=scontent-xsp1-2.xx&oh=7cfa58119f2c928dfd0242317b594f83&oe=5FD032EE'}}
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
        height : height * 0.2,
        backgroundColor : "white",
        margin:7,
        shadowColor:'#2E272D',
        shadowOffset: {width: 0 , height: 3 },
        shadowOpacity:0.2,

        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    }


})


