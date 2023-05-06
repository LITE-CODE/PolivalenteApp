import useNetworkStatus from './useNetworkStatus';
import { useState, useEffect } from 'react';

import storage from '../utils/storage';

const useUserStatus = () => {
    const [hasUser, setHasUser] = useState(null);
    const { isConnected } = useNetworkStatus();

  
    useEffect(() => {
      const getUserStatus = async () => {
        try {
          const value = await storage.get('user');
          if (value) {
            setHasUser(true);
          } else {
            setHasUser(false);
          }
        } catch (error) {
          console.log('getUserStatus-error: ', error);
        }
      };
      if (isConnected) {
        getUserStatus();
      }
    }, [isConnected]);
  
    return { hasUser };
}

export default useUserStatus