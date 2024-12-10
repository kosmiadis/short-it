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

    /*
        -- FIX IT LATER --
        Theme starts of with dark mode from cached theme in localstorage
    */
   
    const { theme: themeCtx } = useTheme();

    const [theme, setTheme] = useState<Theme>(themeCtx);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    // const setCachedTheme: (theme: Theme) => void = (cachedTheme) => {
    //     setTheme(cachedTheme);
    // }

    // useEffect(() => {
    //     const cachedTheme = localStorage.getItem(theme) === 'light' ? 'light' : 'dark';
    //     setCachedTheme(cachedTheme);
    // },[])

    const themeValue: ThemeContext = {
        theme,
        toggleTheme
    }
    
    return <ThemeCtx.Provider value={themeValue}>
        {children}
    </ThemeCtx.Provider>
}

export default ThemeProvider;