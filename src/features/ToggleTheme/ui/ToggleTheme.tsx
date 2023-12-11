import { useTheme } from 'shared/providers/ThemeProvider/useTheme'
import { Button } from 'shared/ui/Button/Button'
import ThemeIcon from 'shared/assets/icons/themeLightDark.svg'
import styles from './ToggleTheme.module.scss'

export const ToggleTheme = () => {
    const {theme, toggleTheme} = useTheme()

  return (
    <Button onClick={toggleTheme}><ThemeIcon fill={'var(--text-color)'} className={styles.icon} /></Button>
  )
}
