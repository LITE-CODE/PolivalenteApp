import {  StyleSheet } from 'react-native'


export const main = StyleSheet.create({

  container:{
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
   height: 65,
   marginHorizontal: '1%',
   width: '98%',
borderStyle: 'solid',
borderBottomColor: '#555555',
borderBottomWidth: 0.85,
  },

  logo:{
   
    height: 70,
    width: 70,
  }, 

  text:{
    marginRight: 15,
    fontFamily: 'Inter-Bold',
    color: '#0E1513'
  }
 
})