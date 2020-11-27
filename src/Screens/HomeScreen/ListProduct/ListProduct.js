import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../Header.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { rootApi } from '../../../utils/rootApi.js';

export default class ListProduct extends Component {
  state = {
    listProduct: [],
  };

  componentDidMount() {
    const {catId} = this.props.route.params;
    fetch(`${rootApi}/api/product_by_type.php?id_type=${catId}`)
      .then((res) => res.json())
      .then((json) => 
      {
          this.setState({listProduct:json})
          console.log(this.state.listProduct);
      }
      
      )
      .catch((err) => console.log(err));
  }

  render() {
    const url =`${rootApi}/api/images/product/`;
    // console.log(this.props.route.params.catId);
    const {catName} = this.props.route.params;
    return (
      <View>
        <Header />
        <ScrollView style={styles.Container}>
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <View style={styles.title}>
                <FontAwesome
                  style={{marginRight: 1}}
                  name="chevron-left"
                  size={20}
                  color="#B10D65"
                />
                <Text style={styles.titlestyle}> {catName} </Text>
                <View></View>
              </View>
            </TouchableOpacity>

            
            {this.state.listProduct.map(item =>(
                <View style={styles.ProductContainer} key={item.id}>
               
                  <Image style={{padding:10, width:110, height:100}} source={{ uri: `${url}${item.images[0]}` }} />
                  
                  {/* style={styles.productImg}
                  // style = {{padding:10, width:350, height:150}}
                /> */}
                <View style={styles.productInfo}>
            <Text style={styles.textname}>{item.name}</Text>
                  <Text style={styles.textprice}>{item.price} VND</Text>
                  <Text style={styles.textDetail}>SHOW DETAILS</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#DBDBD8',
    padding: 1,
  },
  title: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    padding: 12,
  },
  wrapper: {
    backgroundColor: '#fff',
    margin: 7,
    paddingHorizontal: 7,
  },
  titlestyle: {
    fontFamily: 'Avenir',
    color: '#B10D65',
    fontSize: 20,
  },
  ProductContainer: {
    flex: 1,
    flexDirection: 'row',
    borderTopColor: '#D6D6D6',
    borderWidth: 2,
    borderRightColor: '#FFF',
    borderBottomColor: '#FFF',
    borderLeftColor: '#FFF',
  },
  productImg: {
    height: (70 * 300) / 200,
    width: 70,
  },
  productInfo: {
    padding: 10,
    marginRight: 55,
  },
  textname: {
    padding: 5,
    margin: 1,
    fontFamily: 'Avenir',
    color: 'green',
    fontSize: 20,
    fontWeight: '500',
  },
  textprice: {
    padding: 5,
    margin: 1,
    color: 'red',
    fontSize: 17,
  },
  textDetail: {
    marginLeft:200,
    justifyContent: 'center',
    color: '#B10D65',
  },
});
