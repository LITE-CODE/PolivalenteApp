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
    height: 200,
    width: 200
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
    borderBottomWidth: '1px',
    borderStyle: 'solid',
    marginBottom: '15px',
    marginTop: '15px',
    paddingLeft: 10,
    width: '70%',
    height: 30
    
  },

  
  inputFocus:{
    placeholderTextColor: '#F8DC6D',
    borderBottomColor: '#F8DC6D',
    borderBottomWidth: '2px',
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

    dropdown:{
      backgroundColor: 'red',
      justifyContent: 'center',
      borderColor: '#F8DC6D',
      height: 30,
      width: '50%'
    },
    dropdownText:{
      fontFamily: "Inter-Medium",
      color: "#4A504E"
    },

    errorText: {
      justifyContent: 'center',
      marginTop: 2,
      marginBottom: 2,
      fontFamily: 'Inter-Medium',
      color: 'red',
      fontSize: 12
    }


})

export const footer = StyleSheet.create({

  container:{
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: '15px',
    width: '100%',
    flex: 1
  
  }

})