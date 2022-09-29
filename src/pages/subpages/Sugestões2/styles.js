import {  StyleSheet } from 'react-native'


export const main = StyleSheet.create({

  container:{

  },
  textContainer:{
height: '20%',
width: '70%',
textAlign: 'center',
marginHorizontal: '15%',
justifyContent: 'center',
alignItems:'center'


  },

  text:{
    textAlign: 'center',
    fontFamily: 'Inter-Light',
    fontSize: 14
  },
  formularyContainer:{

  height: '60%',
  
justifyContent:'center',
alignItems: 'center'
  },

  inputContainer:{
    width: '100%',
    alignItems: 'center',
    marginVertical: 5

  }

})



export const input = StyleSheet.create({
  button:{
    backgroundColor: '#F8DC6D',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.29,
    shadowColor: "#000",
    shadowRadius: 4.65,
    borderRadius: 50,
    marginTop: 20,
    elevation: 7,
    width: '50%',
    height: 45,

    shadowOffset: {
      width: 0,
      height: 3,
    }

    },
  
    buttonText:{
      fontFamily: 'Inter-Bold',
      color: '#F7F7F8',
      padding: 2
    }, 
  container:{
   
    }, 

    textLenght:{
      
 color: '#555555',
 fontFamily:'Inter-Light',
 fontSize: 8
    },
    lengthContainer:{
width: '70%',
alignItems: 'flex-end'
    },


    text:{
    
textAlign: 'center',
   
      paddingVertical: 5,
      borderColor: '#555555',
      borderStyle: 'solid',
      borderWidth: 0.8,
      borderRadius: 10,

      marginRight:8,
      width: '80%',
    
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
 
    },

})