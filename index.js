
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Signup from './source/pages/Signup';
import Login from './source/pages/Login';
import Dashboard from './source/pages/Dashboard';
import Halamanprofil from './source/pages/Halamanprofil';


export default class Indeks extends Component {

	 static navigationOptions = {
    header: null,
  };

	render(){
		const { navigation } = this.props;
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>

			<Login navigation={navigation}/>

			</View>
		);
	}
}

const SimpleNav = StackNavigator ({
	Login : { screen:Login },
	Signup :{ screen:Signup },
	Dashboard : { screen:Dashboard },
	Halamanprofil : { screen:Halamanprofil }
});

const styles = StyleSheet.create({

	container:{
		flex: 1
	}
  
});
AppRegistry.registerComponent('project2', () => SimpleNav);
