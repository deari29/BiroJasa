/**
 * WRITTEN BY I GEDE ARI PUTRA
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  View,
  Dimensions,
  Text,
  ScrollView
} from 'react-native';
import { Fonts } from '../src/utils/Fonts';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

export default class Profile2  extends Component<{}>{

  render() {
    return (
  
<HeaderImageScrollView
      maxHeight={250}
      minHeight={150}
      renderHeader={() => (
        <ImageBackground style={styles.headerBackgroud} source={require('../images/headerstyle.jpg')} blurRadius={0.8}>

          <View style ={styles.header}>

                <TouchableOpacity>

                    <View style = {styles.profilepicwrap}>
                    <Image style = {styles.profilepic} source={require('../images/profil1.jpg')}/>
                    </View>

                </TouchableOpacity>

             <Text style ={styles.name}>I GEDE ARI PUTRA</Text>
             <Text style ={styles.jasa}>- MOBILE APP DEVELOPER -</Text>
             <Text style ={styles.jasa}>- Contact: 085858623281 Based In Bali -</Text>
  
          </View>

        </ImageBackground>
      )}
    >

<View>

        <TriggeringView onHide={() => console.log('text hidden')} >

            <View style={styles.bar}>

                 <TouchableOpacity style ={[styles.barItem, styles.barseparator]}>

                         <View >
                             <Text style={styles.barTop}>12K</Text>
                             <Text style={styles.barBottom}>CALLS</Text>
                         </View>

                 </TouchableOpacity>

                 <TouchableOpacity style={styles.barItem}>

                         <View>
                             <Text style={styles.barTop}>322</Text>
                             <Text style={styles.barBottom}>PROJECTS</Text>
                         </View>

                 </TouchableOpacity>
          
            </View>

<ImageBackground style={styles.headerBackgroud} source={require('../images/headerstyle.jpg')} blurRadius={1}>
      <ScrollView>
         <View style={styles.photoGrid}>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/imgsatu.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/imgdua.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/imgtiga.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/imgempat.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/imglima.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/imgenam.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/img7.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/img8.jpg')}/>
                          </View>
                </TouchableOpacity>

                <TouchableOpacity>
                          <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../images/img9.png')}/>
                          </View>
                </TouchableOpacity>

              </View>

           </ScrollView>

        </ImageBackground>

      </TriggeringView>

    </View>

  </HeaderImageScrollView>
     
    );
  }
}

      

const styles = StyleSheet.create({

 
  headerBackgroud:{

    flex : 1,
    width: null,
    alignSelf: 'stretch'
  },

  header:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },

  profilepicwrap:{
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor : 'rgba(0,0,0, 0.4)',
    borderWidth: 10
  },

  profilepic:{
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 1
  },
  name: {
    marginTop: 20,
    fontSize: 30,
    color: '#fff',
    fontFamily: Fonts.OstrichSansmdm
  },
  jasa:{
    fontSize: 20,
    color: '#38f5ff',
    fontFamily: Fonts.OstrichSansmdm
 },

 bar: {
    backgroundColor: 'black',
    borderTopWidth:0,
    flexDirection: 'row'
  },

  barseparator:{
    borderRightWidth: 4,
    borderRightColor: 'white'
  },

  barTop:{
    color:'#fff',
    fontSize: 25,
    fontFamily: Fonts.OstrichSansmdm
  },

  barItem:{
    flex: 1,
    padding: 18,
    alignItems: 'center',
    backgroundColor: 'black'
  },
 
 barBottom:{
    color:'#1dff00',
    fontSize: 18,
    fontFamily: Fonts.OstrichSansmdm
 },

headerBackgroud:{

    flex : 1,
    width: null,
    alignSelf: 'stretch'
  },

 photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
 },

 photoWrap:{
    margin: 2,
    height: 120,
    width: (Dimensions.get('window').width / 2) - 4
 },

 photo:{
    flex: 1,
    width: null,
    alignSelf: 'stretch'
 }
 

});