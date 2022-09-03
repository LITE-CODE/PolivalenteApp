import {useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext'


const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context){ throw new Error('Nenhum contexto encontrado') }
    return context;
}


export default useAuth