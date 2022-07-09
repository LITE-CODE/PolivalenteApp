import {  StyleSheet } from 'react-native'


export const main = StyleSheet.create({

  container:{
    justifyContent: 'space-between',
    alignItems: 'center',
    width:' 100%',
    flex: 1,
  },

  logo:{
    justifyContent:'center',
    width:200,
    height:200
  }

})

export const formulario = StyleSheet.create({

  container:{
    justifyContent: 'center',
    alignItems: 'center',  
    width: '100%',
    flex: 2,
  },

  input:{
    borderBottomColor: '#4A504E',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginBottom: 15,
    marginTop: 15,
    paddingLeft: 10,
    width: '70%',
    height: 30
    
  },

  
  inputFocus:{
    placeholderTextColor: '#F8DC6D',
    borderBottomColor: '#F8DC6D',
    borderBottomWidth: 2,
    outlineStyle: 'none',
    width: '72%',
  },

  inputError:{
    placeholderTextColor: 'red',
    borderBottomColor: 'red',
    outlineStyle: 'none',
  },

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
    errorText: {
      fontFamily: 'Inter-Medium',
      color: 'red',
      fontSize: 12
    }


})

export const footer = StyleSheet.create({

  container:{
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 15,
    width: '100%',
    flex: 1
  
  }

})