import storage from 'react-native-sync-localstorage';
import { useColorScheme } from 'react-native';
import { useState } from 'react';

import {LightTheme} from '../styles/themes/LightTheme';
import {DarkTheme} from '../styles/themes/DarkTheme';


export const useTheme =  () =>  {

 const deviceTheme = useColorScheme();
    const [theme, setTheme] = useState( () => {
        const theme =storage.getItem('theme');
        if (!theme) storage.setItem('theme', 'auto');
        return theme
    });

    if (theme == 'auto') setTheme(deviceTheme);

    switch('light'){
        case 'dark':
            res = DarkTheme;
        break
        case 'light':
             res = LightTheme;
        break
        default:
            res = deviceTheme == 'dark' ? DarkTheme : LightTheme;
    }

    return { theme: res, setTheme}



}