import storage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';
import React, { useState } from 'react';

import themes from '../styles/index';
import { ThemeColors } from 'react-navigation';

export default function useTheme() {

    const deviceTheme = useColorScheme();
    const [theme, setTheme] = useState(async (newTheme) => {
        const theme = await storage.setItem('theme', newTheme);
    });

    const getTheme = async () =>{
         const getThemed = await storage.getItem('theme');
         if (!getThemed) return setTheme('auto');
         setTheme(getThemed)
    }

    getTheme();
   
    switch(theme){
        case 'dark':
            res = themes.DarkTheme;
        break
        case 'light':
             res = themes.LightTheme;
        break
        default:
            res = deviceTheme == 'dark' ? themes.DarkTheme : ThemeColors.LightTheme;
    }

    return { theme: res, setTheme}

}