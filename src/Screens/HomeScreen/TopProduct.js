import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import index from '.';
import { rootApi } from '../../utils/rootApi';
// import { rootApi } from '../../utils/rootApi';

export default class TopProduct extends Component {
  render() {
    const {TopProduct} = this.props;
    // console.log('aa' + TopProduct);
    const url =`${rootApi}/api/images/product/`;

    // const renderTopProduct = () => {
    //     TopProduct.map((item,i) => {
    //         return(
    //         <View key={i}>{item.name}</View>
    //         )
    //     })
    // }
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.tiltle}>TopProduct</Text>
        </View>
        <View style={styles.ProductContainer} >

        {TopProduct.map((item, index) => {
          return (
            

            <View key={index}>
            <TouchableOpacity onPress=
            {() =>
              this.props.navigation.navigate('ProductDetail', {
                item:item,
              })
            }
           >
          
             <View style={styles.row}>
             <View style={styles.body}> 
              
              <Image source={{ uri: `${url}${item.images[0]}` }} style={styles.Productimg} />
                
                <Text style={styles.productname}>
                  {item.name}
                </Text>
                <Text style={styles.productprice}>{item.price}</Text>
              </View>             
          </View>
          
  </TouchableOpacity>
          </View>

            // <View key={index}>
            //   <Text>{item.color}</Text>
            // </View>
          );
        })}
      </View>
      </View>
    );
  }
}

const {width} = Dimensions.get('window');
const productwidth = (width - 50) / 2;
const productheith = (productwidth / 400) * 280;
const styles = StyleSheet.create({
  Container: {
    // backgroundColor:"#FFF",
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  tiltle: {
    color: 'green',
    fontSize: 20,
  },
 
  ProductContainer: {
    
 
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    marginHorizontal:20,
    justifyContent:"center",
    alignItems:'center',
    flexWrap:'wrap',
  margin: 10,
    // justifyContent:"space-around",
    // flexWrap: 'wrap'
    alignContent:'stretch'
  },
  row:{
    // backgroundColor: '#9033ccff',
    width:250,
    height:250,
    margin:5,
    alignContent: 'stretch',
    padding:1,
        borderWidth:1,
        borderRightColor:'#FFF',
        borderBottomColor:'#FFF',
        borderLeftColor:'#FFF',
       
 

  },
  body: {
    // flexWrap: 'wrap',
    width:width *0.4,
    marginLeft:5,
  },
  Productimg: {
    marginLeft:50,
    alignItems:"center",
    justifyContent:'center',
    width: 150,
    height: 120,
    
  },
  productname: {
    textAlign:'center',
    fontSize:17,
    padding:10,
    color: 'green',
    fontWeight: '500',
  },
  productprice: {
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: 'red',
    textAlign: 'center',
  },
  // rows:{
  //   flexDirection:"row-reverse"
  // }


});

// //<View style = {{height:10, width,}}></View>

// //<View style = {{height:10, width,}}></View>

{
  /* <View>
<Text style={styles.tiltle}> TopProduct </Text>

</View>
<View style={styles.body}>

<TouchableOpacity
    onPress={() =>
        this.props.navigation.navigate('ProductDetail', {
            title: 'bia hoi',
        })}
>
    <View style={styles.ProductContainer}>
        <Image
            source={require('./img/Product1.jpg')}
            style={styles.Productimg}
        />
        <Text style={styles.productname}>
            Bia Đen Đức Kaiserin thùng 12 lon{' '}
        </Text>
        <Text style={styles.productprice}> 165.000 Đ</Text>
    </View>
</TouchableOpacity>
<View />
</View> */
}
