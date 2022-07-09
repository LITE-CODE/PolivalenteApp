import {  StyleSheet } from 'react-native'


export const main = StyleSheet.create({

  container:{
    width: 40,
    height: 40,
   borderRadius: 50,
borderWidth: 1,
borderStyle: 'solid',
borderColor: '#555555',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
   
  },

 

  text:{

    fontFamily: 'Inter-Black',
    color: '#0E1513'
  }
 
})



function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
  
}