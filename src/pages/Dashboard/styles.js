import {  StyleSheet } from 'react-native'


export const main = StyleSheet.create({

  container:{
    backgroundColor: '#F7F7F8',

height: '100%'
    
   

  },

  logo:{
    justifyContent:'center',
    height: 200,
    width: 200
  }, 
  line:{
    width: '98%',
    backgroundColor:  '#555555',
    height: 0.85,
    marginLeft: '1%',
    marginRight: '1%',
    justifyContent: 'center'
  }


})

export const information = StyleSheet.create({
  container:{
    marginTop: '2.5%',
    marginBottom: '2.5%',
  alignItems:'center'
 
  }
})

export const categorys = StyleSheet.create({
  container:{
    
    
    alignItems: 'center'

  },
  double:{
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'space-around',

    marginTop: ' 5%'
  }
})


export const footer = StyleSheet.create({

  container:{
    marginTop: '2.5%',
    marginBottom: '2.5%',
alignItems: 'center'
        },

  
  text:{
    color: '#555555',
fontFamily: 'Inter-Medium',
fontSize: 13.5,
textAlign: 'center',

  },
  link:{
    fontFamily: 'Inter-Medium',
    color: '#F8DC6D',
    borderBottomColor: '#F8DC6D',
    borderStyle: 'solid',
    borderBottomWidth: 1

  }
 
})