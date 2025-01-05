/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

type Theme = 'light' | 'dark';

interface ThemeContext {
    theme: Theme,
    toggleTheme: () => void,
}

export const ThemeCtx = createContext<ThemeContext>({
    theme: 'light',
    toggleTheme: () => {},
})

export const useTheme = (): ThemeContext => useContext(ThemeCtx);

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {


   
    const { theme: themeCtx } = useTheme();

    const [theme, setTheme] = useState<Theme>(themeCtx);

    const toggleTheme = () => {

        setTheme(prevTheme => {
            const switchingTo = prevTheme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', switchingTo);
            return switchingTo
        })
    }

    //set cached theme
    useEffect(() => {
        const cachedTheme = localStorage.getItem('theme');
        if (cachedTheme === 'light') {
            setTheme('light');
        }
        else {
            setTheme('dark');
        }
    },[])

    const themeValue: ThemeContext = {
        theme,
        toggleTheme
    }
    
    return <ThemeCtx.Provider value={themeValue}>
        {children}
    </ThemeCtx.Provider>
}

export default ThemeProvider;