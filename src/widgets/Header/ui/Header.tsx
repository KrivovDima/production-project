import { pagesPaths } from 'shared/config/router'
import { useTheme } from 'shared/providers/ThemeProvider/useTheme'
import { NavLink } from 'shared/ui/NavLink/NavLink'
import styles from './Header.module.scss'

export const Header = () => {
    const {toggleTheme} = useTheme()

  return (
    <header className={styles.header}>
        <button onClick={toggleTheme}>ToggleTheme</button>
        <nav className={styles.nav}>
          <NavLink to={pagesPaths.main}>Main</NavLink>
          <NavLink to={pagesPaths.about}>About</NavLink>
        </nav>
    </header>
  )
}
