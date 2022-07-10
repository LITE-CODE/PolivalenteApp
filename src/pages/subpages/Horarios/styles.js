import {  StyleSheet } from 'react-native'


export const main = StyleSheet.create({

  container:{
    
    backgroundColor: '#F7F7F8',


  },
  line:{
    width: '98%',
    backgroundColor:  '#555555',
    height: 0.85,
    marginLeft: '1%',
    marginRight: '1%',
    justifyContent: 'center'
  },
  list:{

    flexDirection: 'row',
   marginHorizontal: '2.5%',
    width: '95%',
  borderWidth: 1,
  backgroundColor: '#DAE3E0',
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,

   
  }


})

export const list = StyleSheet.create({

  container:{

    height: '91%',


justifyContent: 'center',
 



  },
  coluna:{



justifyContent: 'center',





  },

  ativa:{
    backgroundColor: '#99EE71'
  },
  item:{
borderColor: '#555555',
borderStyle: 'solid',
borderWidth: 0.25,
alignItems: 'center',
justifyContent: 'center',
height: 20,


  },
  text:{
fontFamily: 'Inter-Light',
fontSize:12
  },
  negriteText:{
    fontFamily: 'Inter-Medium'
  },

  title:{
    backgroundColor: '#F6D03C',
    borderColor: '#555555',
borderStyle: 'solid',

alignItems: 'center',
justifyContent: 'center',
height: 24,
borderWidth: 0.25,
borderBottomWidth: 1,
fontFamily: 'Inter-Medium'
  },


})

