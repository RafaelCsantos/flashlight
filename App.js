import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle= () => setToggle(oldToggle => !oldToggle);


  // if toggle return light
  return(
   <View style= {toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress= {handleChangeToggle}>
    


    <Image style= {toggle ? style.lightiningOn : style.lightiningOff }  
    source={
      toggle?require('./assets/icons/eco-light.png')
      :
      require('./assets/icons/eco-light-off.png')} 
      />

<Image style= {style.dioLogo }  
    source={
      toggle?require('./assets/icons/logo-dio.png')
      :
      require('./assets/icons/logo-dio-white.png')} 
      />

      </TouchableOpacity>
       </View>
       );
};

export default App;



const style = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'black',
alignItems: 'center',
justifyContent: 'center',
},

containerLight: {
  flex: 1,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  },

lightiningOn: {
 resizeMode: 'contain',
 alignSelf: 'center',
 width: 150,
 height: 150,
},
lightiningOff: {
  resizeMode: 'contain',
  alignSelf: 'center',
  width: 150,
  height: 150,
  tintColor: 'white',
 },


dioLogo: {
   resizeMode: 'contain',
   alignSelf: 'center',
   width: 250,
   height: 250,
  },
 

});