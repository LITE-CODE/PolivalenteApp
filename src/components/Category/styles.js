import {  StyleSheet } from 'react-native'


export const main = StyleSheet.create({

  container:{

      width: '70%',
      height: '30%',
      borderRadius: 5,
      borderStyle: 'solid',
      marginTop: '5%',
borderColor: '#555555',
borderWidth: 0.01,
padding: '2%',
justifyContent: 'center',
alignItems: 'center',

shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,

  },

  title:{
fontFamily:'inter-Black',
fontSize: 24
  },
  description:{
fontFamily: 'Inter-Medium',
fontSize: 13.5,
textAlign: 'center',
marginBottom: 20
  },
  link:{
    fontFamily: 'Inter-Bold',
    color: '#F8DC6D',
    borderBottomColor: '#F8DC6D',
    borderStyle: 'solid',
    borderBottomWidth: 0.5

  }
 
})