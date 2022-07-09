import {  StyleSheet } from 'react-native'
import sendImage from '../../../assets/imgs/send.png'

export const main = StyleSheet.create({

  container:{
    backgroundColor: '#F7F7F8',
alignItems: 'center',
    height: '100%'
  },

  line:{
    width: '98%',
    backgroundColor:  '#555555',
    height: 0.85,
    marginLeft: '1%',
    marginRight: '1%',
    justifyContent: 'center'
  },

  list: {
    //paddingHorizontal: 20,
padding: 10

  },

  listItem: {
    
    backgroundColor: '#F7F7F8',
    marginTop: 20,
    padding: 30,
    borderRadius: 10,
    borderColor: '#55555',
    borderStyle: 'solid',
    borderWidth: 0.8,
  }
})


export const list = StyleSheet.create({

  container:{
      flexDirection: 'row',
      marginBottom: 8
  },
  title:{
    fontSize: 14,
fontFamily: 'Inter-Bold',
  },
  date:{
    fontFamily: 'Inter-Light',
    fontSize: 10,
    color:'#555555',
    marginLeft: 3
  },
  description:{

 fontFamily: 'Inter-Light',
 paddingHorizontal: 20
  },
  textContainer:{
    
  }


})

export const input = StyleSheet.create({

  container:{
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 10,
    height: 100,
   
    alignItems: 'center',
    justifyContent: 'center'
   
  
    }, 

    image:{
      width:  22,
   height: 22,
   marginLeft:8
    },
    text:{
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderColor: '#55555',
      borderStyle: 'solid',
      borderWidth: 0.8,
      borderRadius: 10,
      outlineStyle: 'none',
      marginRight:8,
      width: '50%'
    },
    focus:{
      placeholderTextColor: '#F8DC6D',
      borderColor: '#F8DC6D',
      borderWidth: 1
    },
    error:{
      placeholderTextColor: 'red',
      placeholderTextColor: 'red',
      borderColor: 'red',
      outlineStyle: 'none',
    },

})