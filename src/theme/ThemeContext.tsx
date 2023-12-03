import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark"
}

type ThemeContextValue = {
    theme?: Theme
    setTheme?: Dispatch<SetStateAction<Theme>>
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeContext = createContext<ThemeContextValue>({});

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}