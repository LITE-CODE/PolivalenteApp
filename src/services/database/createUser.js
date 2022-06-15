import { getDatabase, ref, get, set, onValue, update } from "firebase/database";
import { encodeKey, decodeKey} from "../codeKey";


export const createUser = (user={}) => {

    var email = encodeKey(user?.email);
    var password = encodeKey(user?.password);
    var name = encodeKey(user?.name)
    var classe = encodeKey(user?.class)
    var database = getDatabase();




var dataUser = {
    email,
    password,
    name,
    class: classe
}


 set(ref(database, 'registered/' + email), dataUser)  
   
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