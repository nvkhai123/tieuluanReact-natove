import React, { Component } from 'react'
import { Text, View , TouchableOpacity, ScrollView,FlatList, SafeAreaView} from 'react-native';
import Header from './Header';
import HeaderTop from './HeaderTop'
import Banner from './Banner'
import Banner2 from './Banner2'
import Category from './Category'
import Sales from './Sales.js'
import TopProducts from './TopProduct'
import {rootApi} from '../../utils/rootApi'



export default class index extends Component {
    // state = {
    //     result:[],
    // }
    // fetchAPI = () => {
    //     fetch('http://113.161.234.101:3000/getProfile')
    //     .then((response) => response.json())
    //     .then((json) => {
    //         // this.setState({result:json})
    //         console.log(json);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
    // componentDidMount() {
    //     this.fetchAPI();
    // }
    // renderItem1 = ({item}) => {
    //     <View><Text>hello</Text></View>
    // } 
    
    constructor(props) {
            super ();
            this.state = {
              type:[],
              TopProduct: [],
              category: [],
              cartArray:[],

            };
          
    };

    componentDidMount (){
       
        fetch(`${rootApi}/api/`)
        .then((response) => response.json())
        // .then((json) => console.log(json));
        .then((json) => {this.setState({category:json.type, TopProduct: json.product, cartArray: json.cartArray});
    });
    }
    render() {
        // console.log(this.state.category)
        const  {TopProduct,category} = this.state;

       
        return (
           
            <ScrollView  >
          
                <Header navigation={this.props.navigation} />
                <Banner/>
                <Banner2/>
                {/* <TouchableOpacity onPress={() =>this.props.navigation.navigate("ListProduct",{
                    category
                })} > */}
                      <Category category={category}  navigation={this.props.navigation}/>
                {/* </TouchableOpacity> */}
                
                <TopProducts navigation={this.props.navigation} TopProduct = {TopProduct}/>
               
                {/* <FlatList data={this.state.result} 
                        keyExtractor={item => item.id}
                        renderItem={this.renderItem1}
                        
                /> */}
          
            </ScrollView>
        )
    }
};

