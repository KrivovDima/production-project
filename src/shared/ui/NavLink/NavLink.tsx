import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavLink.module.scss'

type NavLinkProps = {
    className?: string
} & LinkProps

export const NavLink: FC<NavLinkProps> = ({ to, className, children}) => {
  return (
    <Link to={to} className={classNames(styles.header, {}, [className])}>{children}</Link>
  )
}
