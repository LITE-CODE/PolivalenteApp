import {  StyleSheet } from 'react-native'


export const main = StyleSheet.create({

  container:{
    backgroundColor: '#F7F7F8',

    width:' 100%',
    height: '100%',
    flex: 1,
  },

  logo:{
    justifyContent:'center',
    height: 200,
    width: 200
  }

})

export const information = StyleSheet.create({
  container:{
    marginTop: 90,
    
 
  }
})

export const categorys = StyleSheet.create({
  container:{
    
    height: '60%',
    alignItems: 'center'

  },
  double:{
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'space-around',

    marginTop: ' 5%'
  }
})

