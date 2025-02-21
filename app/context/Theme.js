import { useTheme } from 'next-themes';
import { createContext, useContext } from 'react'

export const ThemeContext = createContext({
    ThemeMode: "",
    darktheme: () => { },
    lighttheme: () => { },

});

export const Themeprovider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}