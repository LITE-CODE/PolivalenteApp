import {  StyleSheet } from 'react-native'


export const main = StyleSheet.create({

  container:{
    

    backgroundColor: '#F7F7F8',
  },
  flatlist:{

    height: '200%',
marginBottom: 90

  },
  text:{
    fontFamily: 'Inter-Light',
    fontSize:11,
    color: '#555555',
      },
})

export const flat = StyleSheet.create({

  container:{

    borderRadius: 10,
    borderColor: '#55555',
    borderStyle: 'solid',
    borderWidth: 0.8,
    padding: 10,
    width: '90%',
 
    backgroundColor: '#F7F7F8',
 marginVertical: 5,
 shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 5,
 marginHorizontal: '5%'

  },
  one:{
  
//alignItems: 'center',
//justifyContent: 'space-around',
   // flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 4
    
  },
  title:{
    width: '40%',
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 10,
fontFamily: 'Inter-Medium'
  },
  starts:{
    width: '40%',
flexDirection: 'row',
justifyContent: 'center'
  }

})

export const observation = StyleSheet.create({

  button:{
    backgroundColor: '#F8DC6D',
    justifyContent: 'center',
    alignItems: 'center',
  
    borderRadius: 5,
    marginTop: 20,
  
    width: '20%',
    

    },
  
    buttonText:{
      fontFamily: 'Inter-Medium',
      color: '#F7F7F8',

      fontSize: 11.5,
      padding: 3
    }, 

  container:{
    marginVertical: 2,
 paddingHorizontal: 10,
   

    borderColor: '#555555',
    borderStyle: 'solid',
    borderWidth: 0.8,
    borderRadius: 5,

    marginRight:8,
    width: '80%',
  },

  focus:{
 
      borderColor: '#F8DC6D',
      borderWidth: 1
  },

  error:{
    placeholderTextColor: 'red',
    placeholderTextColor: 'red',
    borderColor: 'red',
  }


})




export const information = StyleSheet.create({
 container:{

    width: '95%',
    marginHorizontal: '2.5%',
    marginVertical: 20,

   alignItems: 'center',
   justifyContent: 'center'

 },
 title:{
fontFamily: 'Inter-Medium',
fontSize: 15,
color: '#555555',
 },
 textContainer:{
  width: '80%'

 },
 text:{
  textAlign: 'center',
  fontSize: 10,
  fontFamily: 'Inter-Light',
 

 }
})