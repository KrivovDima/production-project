import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

type useThemeReturnType = {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = ():useThemeReturnType => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme((prevState) =>{
            const newTheme = prevState === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)

            return newTheme
        });
    }

    return {
        theme,
        toggleTheme
    }
}