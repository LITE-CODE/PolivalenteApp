import { getDatabase, ref, get, set, onValue, update } from "firebase/database";
import { encodeKey, decodeKey} from "../codeKey";


export const getUser = async  (user={}) => {

    var email = encodeKey(user?.email);
    var password = encodeKey(user?.password)
    var database = getDatabase();


    /*
update(ref(database, 'registered/' + email), {
    email: email,
    password: password,
    name: encodeKey('João Vitor Dutra de Souza')
})
*/

  var data = get(ref(database, 'registered/' + email)).then((snapshot) => {

        if (snapshot.exists()) {
          
            var decodedUser =  snapshot.val();
            Object.entries(decodedUser).forEach(([key, value]) => {
                decodedUser[key] = decodeKey(value)
            })

 console.log()
            if (user?.password !== decodedUser.password){
                return {
                    status: 'incorrect password',
                    user: null
                }
            }
return {
    status: 'user found',
    user: decodedUser
}

        } else {
         return{
              status: 'User not found',
              user: null
          }
        }
      }).catch((error) => {
        return {
            status: 'User not found',
            error: error,
            user: null
        }
      });

  return data
      
}