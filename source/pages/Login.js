/**
 * WRITTEN BY I GEDE ARI PUTRA
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image
} from 'react-native';

import { Fonts } from '../src/utils/Fonts';
import Logo from '../components/Logo';

import { StackNavigator } from 'react-navigation'


export default class Login extends Component<{}>{

  static navigationOptions = {
    header: null,
  };

  

	render(){
    const { navigate } = this.props.navigation;
    
		return(
<ImageBackground style={styles.gambarBelakang} source={require('../images/loginsignup.jpg')} blurRadius={0}>

			<View style={styles.container}>
				  <View style={styles.logo}>

         <Image style={{width: 130, height: 140}}
          source={require('../images/logo.png')}/>
            <Text style={styles.logoText}>B i r o  J a s a</Text>
      </View>

				<TextInput style={styles.kotakInput} placeholder="Email" placeholderTextColor='#fff'/>
        <TextInput style={styles.kotakInput} placeholder="Password"
        secureTextEntry={true} placeholderTextColor='#fff'/>

        <TouchableOpacity style={styles.loginButn} onPress={()=> navigate('Dashboard')}>
          <Text style={styles.TombolLogin}>L O G I N</Text>
        </TouchableOpacity>

				<TouchableOpacity onPress={()=> navigate('Signup')}>
				<Text style = {styles.daftar}>Tidak ada akun ? Silahkan Daftar.</Text>
				</TouchableOpacity>
			</View>
</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({

  gambarBelakang: {
    flex :1
  },
logoText: {
    fontSize: 25,
    color:'#000',
    marginBottom:26,
    paddingBottom: 60,
    fontFamily: Fonts.OstrichSansmdm
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60
   
  },

  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   
  },

  daftar: {
  	color: '#ffff'
  },

   kotakInput: {
    width:300,
    borderColor: '#fff',
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor:'transparent',


  },
  TombolLogin: {
    fontSize: 25,
    color: '#02ff06',
    textAlign: 'center',
    fontFamily: Fonts.OstrichSansmdm
  },
  loginButn: {
    width: 150,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 27,
    marginVertical: 15,
    justifyContent: 'center'
  }
});

