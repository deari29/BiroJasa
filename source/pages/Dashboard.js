import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  TextInput,
  ScrollView,
  Text
} from 'react-native';
import { Fonts } from '../src/utils/Fonts';
export default class Dashboard  extends Component<{}>{
  
  render() {
    return (
  

      <View style={styles.container}>

             <TextInput style={styles.textinput}
            underlineColorAndroid='transparent'
            placeholder='Cari Jasa'/>
      
          <ScrollView>

          <TouchableOpacity>
          <Text style={styles.paragraph}>JASA SERVICE SALURAN AIR</Text>
         <Image style={styles.imagewrap}
          source={require('../images/img1.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.paragraph}>JASA SERVICE LISTRIK</Text>
          <Image style={styles.imagewrap}
          source={require('../images/img2.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.paragraph}>JASA SERVICE MOTOR</Text>
          <Image style={styles.imagewrap}
          source={require('../images/img3.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.paragraph}>JASA SERVICE MOBIL</Text>
          <Image style={styles.imagewrap}
          source={require('../images/img4.png')}/>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.paragraph}>JASA SERVICE KOMPUTER</Text>
          <Image style={styles.imagewrap}
          source={require('../images/img5.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.paragraph}>JASA PHOTOGRAPHY</Text>
          <Image style={styles.imagewrap}
          source={require('../images/img6.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.paragraph}>JASA EVENT ORGANIZER DAN DEKORASI</Text>
          <Image style={styles.imagewrap}
          source={require('../images/img7.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.paragraph}>JASA KONTRAKTOR ALAT BERAT</Text>
          <Image style={styles.imagewrap}
          source={require('../images/img8.jpg')}/>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={styles.paragraph}>JASA ARSITEKTUR BANGUNAN</Text>
          <Image style={styles.imagewrap}
          source={require('../images/img9.png')}/>
          </TouchableOpacity>

          </ScrollView>

      </View>
     
    );
  }
}

      

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525'
  },

  photogrid: {
    flex: 1,
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imagewrap: {
    padding: 2,
    height: 120,
    width: (Dimensions.get('window').width / 1) - 2 ,
    paddingVertical: 100,
    marginBottom:20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textinput: {
    textAlign: 'center',
    padding: 1,
    marginTop: 10,
    marginBottom:10,
    backgroundColor:'#fff'
  },
  paragraph: {
    textAlign: 'center',
    color: '#02ff06',
    fontFamily: Fonts.OstrichSansmdm,
    fontSize: 25
}
  
});