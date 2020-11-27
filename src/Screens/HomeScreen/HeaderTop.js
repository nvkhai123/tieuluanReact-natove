import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const HeaderTop = ({title, moreTitle,moreIcon}) => {
    return(

        <View style={styles.Container}>
            <Text style={{fontSize:25}}>{title}</Text>
            
            <View flexDirection={"row"} style={{marginRight:15}}>
            <FontAwesome name =  "glass" size={15}/>
            <Text>{moreTitle}</Text>
            </View>
        </View>
    )


};
const styles=StyleSheet.create({
    
    Container:{
        // flex:1,
        flexDirection:"row",
        flexDirection:"row",
        justifyContent:"space-between",
      },
})


export default HeaderTop;