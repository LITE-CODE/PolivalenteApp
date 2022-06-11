import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";


export  const connectToDatabase =  () => {

    try {

        const firebaseConfig = {
            apiKey: process.env.apiKey,
            authDomain: process.env.authDomain,
            databaseURL: 'https://projeto-bonfire-default-rtdb.firebaseio.com',
            projectId: process.env.projectId,
            storageBucket: process.env.storageBucket,
            messagingSenderId: process.env.messagingSenderId,
            appId: process.env.apiId,
            measurementId: process.env.measurementId
          };
          

          const app = initializeApp(firebaseConfig);
          const database = getDatabase();


          return ({
            status: "successful connection",
            database: database
        })

        
    } catch (error){

        return ({
            status: "unsuccessful connection",
            error: error,
            database: null
        })
    }
}