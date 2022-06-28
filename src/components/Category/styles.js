import {  StyleSheet } from 'react-native'


export const main = StyleSheet.create({

  container:{

      width: '70%',
      height: 200,
      borderRadius: 5,
      borderStyle: 'solid',
      marginTop: '2.5%',
      marginBottom: '2.5%',
borderColor: '#555555',
borderWidth: 1,
padding: '2%',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F7F7F8',
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
fontFamily:'Inter-Black',
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
    borderBottomWidth: 1

  }
 
})