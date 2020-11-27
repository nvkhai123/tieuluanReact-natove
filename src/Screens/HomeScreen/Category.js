
import Swiper from 'react-native-swiper';
import React, { Component } from 'react'
import { Text, View, Image,StyleSheet, Dimensions ,TouchableOpacity} from 'react-native'
import { rootApi } from '../../utils/rootApi';



// export default class Category extends Component {
//   gotolistProduct (){
//     const { navigator } = this.props;
//     navigator.push({name: 'ListProduct'});
//   }
const Category = ({navigation,category}) => {
  // render() {
    // console.log('category');
    // console.log(category);
    return (
      
      <View style = {styles.wraper}>
        <Text style={{color: 'green',fontSize: 20,}}>Category</Text>
        <Swiper  
                // autoplay autoplayTimeout={3} 
                style= {{backgroundColor:"#FFF"}}>
          
              
        {category.map(cat => (
          <View key={cat.id}>
              <TouchableOpacity onPress={() =>navigation.navigate("ListProduct",{
                catId:cat.id,
                catName:cat.name
              })} >
                <Text style={styles.texttitle}>{cat.name}</Text>
          <Image source={{uri:`${rootApi}/api/images/type/${cat.image}`}} 
            style = {styles.img}
            //  resizeMode={"cover"}
         />
         </TouchableOpacity>
            
         
         </View>
        ))}

        </Swiper>
      </View>
      
    )
  }
// }
const { height } = Dimensions.get("window");
const styles  = StyleSheet.create({
  wraper:{
    height : height * 0.4,
    backgroundColor : "white",
    margin:7,
    shadowColor:'#2E272D',
    shadowOffset: {width: 0 , height: 3 },
    shadowOpacity:0.2,

    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
      

  },

 text:{
    fontSize:20,
    textAlign:"center",
    color:"green",
    
 },
 img:{
  width:height/1.5, height:height*0.3,
        backgroundColor : "white",
        margin:1,
        shadowColor:'#2E272D',
        shadowOffset: {width: 0 , height: 3 },
        shadowOpacity:0.2,

        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
 },
 texttitle:{
   color:'red',
   fontSize:20,
   textAlign:"center",
   paddingBottom:5,
 }


})
export default Category;
