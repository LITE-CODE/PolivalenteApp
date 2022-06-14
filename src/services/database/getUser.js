import { getDatabase, ref, get } from "firebase/database";
import { encodeKey, decodeKey} from "../codeKey";


export const getUser = async  (user={}) => {

    var email = encodeKey(user?.email);
    var password = encodeKey(user?.password)
    var database = getDatabase();

    const reference = ref(database, 'registered/' + email);


    const data = get(reference).then((snapshot) => {



        if (snapshot.exists()) {
          
            
            var pushUser =  snapshot.val();
            Object.entries(pushUser).forEach(([key, value]) => pushUser[key] = decodeKey(value));
            

//check user password
            if ( user?.password !== pushUser.password ){
                return {
                    status: 'incorrect password',
                    user: null
                }
            }


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