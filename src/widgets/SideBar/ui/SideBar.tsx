import { ToggleTheme } from 'features/ToggleTheme'
import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import styles from './SideBar.module.scss'

export const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = 
        () => setCollapsed((prev) => !prev)

  return (
    <div className={classNames(styles.sideBar, {[styles.collapsed]: collapsed})}>
        <main className={styles.main}><Button onClick={toggleCollapsed}>toggle</Button></main>
        <div className={styles.bottomActions}><ToggleTheme /></div>        
    </div>
  )
}
