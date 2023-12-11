import { ToggleTheme } from 'features/ToggleTheme'
import { pagesPaths } from 'shared/config/router'
import { NavLink } from 'shared/ui/NavLink/NavLink'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
        <ToggleTheme />    
        <nav className={styles.nav}>
          <NavLink to={pagesPaths.main}>Main</NavLink>
          <NavLink to={pagesPaths.about}>About</NavLink>
        </nav>
    </header>
  )
}
