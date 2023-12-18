import { useTheme } from 'shared/providers/ThemeProvider/useTheme'
import { Button } from 'shared/ui/Button/Button'
import ThemeIcon from 'shared/assets/icons/themeLightDark.svg'
import styles from './ToggleTheme.module.scss'

export const ToggleTheme = () => {
    const {toggleTheme} = useTheme()

  return (
    <Button onClick={toggleTheme}><ThemeIcon className={styles.icon} /></Button>
  )
}
