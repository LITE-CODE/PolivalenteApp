import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, get } from "firebase/database";
import { encodeKey, decodeKey} from "../codeKey";


export const getUser = async  (user={}, decoded) => {


    var email = !decoded ? encodeKey(user?.email) : user.email;
    var password = !decoded ? encodeKey(user?.password) : user.password

    var database = getDatabase();

    const reference = ref(database, 'registered/' + email);


    const data = get(reference).then((snapshot) => {



        if (snapshot.exists()) {
          
            
            var pushUser =  snapshot.val();
            Object.entries(pushUser).forEach(([key, value]) => pushUser[key] = decodeKey(value));
            
            console.log(user.password, pushUser.password)

//check user password
            if ( user?.password !== pushUser.password ){
                return {
                    status: 'incorrect password',
                    user: null
                }
            }
/*
    CookieManager.set('user', {
        name: 'encodeEmail',
        value: email,
    }).then((done) => {
        console.log('CookieManager.set =>', done);
    });
*/
//return user object
return {
    status: 'user found',
    user: pushUser
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