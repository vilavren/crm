import cn from 'classnames'
import React from 'react'

import styles from './Input.module.css'
import { InputProps } from './Input.props'

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={cn(className, styles.input)} {...props} />
}
