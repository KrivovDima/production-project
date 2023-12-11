import React, { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

type ButtonProps = {
    
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button:FC<ButtonProps> = ({children, className, ...otherProps}) => {
  return (
    <button className={classNames(styles.button, {}, [className])} {...otherProps}>{children}</button>
  )
}
