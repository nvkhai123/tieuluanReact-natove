import React, { Component } from 'react'
import {  Text, View,TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../components/Login/Login';
import SignInScreen from '../components/Login/SignInScreenCopy';
import SignUpScreen from '../components/Login/SignUpScreen';
import ProfileScreen from '../components/ProfileScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import NotificationScreen from './components/NotificationScreen'
// import Search from './components.Search'
import Search from '../components/Search';
import NotificationScreen from '../components/NotificationScreen'
import Management from '../components/Login/Management';
// import HomeScreen from '../components/Home'
import HomeScreen from '../src/Screens/HomeScreen/index'

import DetailHome from '../components/DetailHome';
import index from './Screens/HomeScreen/index'
import ProductDetail from './Screens/HomeScreen/ProductDetail/ProductDetail';
import ListProduct from './Screens/HomeScreen/ListProduct/ListProduct'
import Category from './Screens/HomeScreen/Category';
import CartView from './Screens/HomeScreen/CartView/index';
import SignInScreenCopy from '../components/Login/SignInScreenCopy';




// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }
// function HomeScreen(props) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <TouchableOpacity onPress={()=>props.navigation.navigate('Details') }>
//         <Text>chi tiet </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

  // function ListProduct1() {
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>Detal Screen</Text>
  //     </View>
  //   );
  // }

  function UserScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>user Screen</Text>
        <TouchableOpacity onPress= {()=> navigation.navigate('DetailsUser') }>
            <Text> go to UserDetails</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function UserDetalsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>UserDetalScreen</Text>
        <TouchableOpacity>
            <Text> go to UserDetails</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const StackUser = createStackNavigator();
  const StackHome = createStackNavigator();
 

  function  StackUserScreen(){
      return(
        <StackUser.Navigator initialRouteName="ProfileScreen">
        <StackUser.Screen name = "Login" component = {Login}/>
        <StackUser.Screen name="ProfileScreen" component={ProfileScreen} />
        <StackUser.Screen name="SignUpScreen" component={SignUpScreen} />
        <StackUser.Screen name="SignInScreenCopy" component={SignInScreenCopy} />
        <StackUser.Screen name="Management" component={Management} />
      </StackUser.Navigator>
      )
  }
  function StackScreen(){
      return(
        // screenOptions={{headerShown:false}}
        <StackHome.Navigator initialRouteName="index"  >
        <StackHome.Screen name="index" component={index} options = {{headerShown:false}} />
        <StackHome.Screen name="CartView" component={CartView} options = {{headerShown:false}} />

        <StackHome.Screen name="Category" component={Category} />
        <StackHome.Screen name="ListProduct" component={ListProduct} options = {{headerShown:false}} />
        <StackHome.Screen name="ProductDetail" component={ProductDetail} options = {{headerShown:false}} />
        

        
      </StackHome.Navigator>
      )
  }


  

const Tab = createBottomTabNavigator();
export default class App extends Component {
  // componentDidMount () {
  //   fetch ('192.168.1.3:81/api/')
  //   .then (res => res.json())
  //   .then(resJSON => console.log(resJSON));
  // }
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator 
                 initialRouteName="Home"
                 activeColor="white"
                 inactiveColor="#3e2465"
                 barStyle={{ backgroundColor: '#8080ff' }}
                >
                  
                <Tab.Screen name='Home' component={StackScreen}
            options={{ 
                tabBarLabel:'Home',
                tabBarIcon:({color}) =><FontAwesome name='home' size={25}  color={color}/>,
            }} />
             < Tab.Screen name='Search' component={Search}
            options={{
                tabBarLabel:'Search',
                tabBarIcon:({color}) =><FontAwesome name='search' size={25}  color={color}/>,
            }} />
             <Tab.Screen name='notifications' component={NotificationScreen}
            options={{ 
                tabBarLabel:'Notifications',
                tabBarIcon:({color}) =><FontAwesome name='bell-o' size={25}  color={color}/>,
            }} />
            <Tab.Screen name='Profile' component={StackUserScreen}
            options={{ 
                tabBarLabel:'user',
                tabBarIcon:({color}) =><FontAwesome name='user' size={25}  color={color}/>,
            }} />
        {/* <Tab.Screen name="HomeStack" component={StackUserScreen} />
        <Tab.Screen name="UserStack" component={StackUserScreen} /> */}
      </Tab.Navigator>
          </NavigationContainer>
        )
    }
}

