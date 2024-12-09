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

    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        console.log(theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    const themeValue: ThemeContext = {
        theme,
        toggleTheme
    }
    
    return <ThemeCtx.Provider value={themeValue}>
        {children}
    </ThemeCtx.Provider>
}

export default ThemeProvider;