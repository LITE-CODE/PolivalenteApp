import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, set } from "firebase/database";
import { encodeKey, decodeKey} from "../codeKey";


export const createUser =  (user={}) => {

    var email = encodeKey(user?.email);
    var password = encodeKey(user?.password);
    var name = encodeKey(user?.name)
    var database = getDatabase();
    var classe = '2reg2'



var dataUser = {
    email,
    password,
    name,
    classe
}


 set(ref(database, 'registered/' + email), dataUser)  
   /*
 CookieManager.set('user', {
  name: 'encodeEmail',
  value: email,
}).then((done) => {
  console.log('CookieManager.set =>', done);
});
*/

try {
  AsyncStorage.setItem('user', JSON.stringify(dataUser))
} catch (e) {
  // saving error
  console.log(e)
}



    return {
        status: 'user created successfully',
        user: dataUser
    }


            /*
    update(ref(database, 'registered/' + email), {
        email: email,
        password: password,
        name: encodeKey('João Vitor Dutra de Souza')
    })
    */

}