import React, { Component } from 'react'
import { Text, View , ScrollView} from 'react-native';
import Header from './Header';
import HeaderTop from './HeaderTop'
import Banner from './Banner'
import Category from './Category'
import Sales from './Sales.js'
import TopProduct from './TopProduct'

export default class index extends Component {
    render() {
        return (
            <ScrollView>
                <Header/>
                <Banner/>
                <Category navigator = {this.props.navigator}/>
                <TopProduct/>

                
                
            </ScrollView>
        )
    }
}
