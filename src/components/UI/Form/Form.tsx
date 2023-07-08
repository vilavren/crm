import cn from 'classnames'
import React from 'react'

import styles from './Form.module.css'
import { FormProps } from './Form.props'

export const Form: React.FC<FormProps> = ({
  className,
  children,
  ...props
}: FormProps) => {
  return (
    <form className={cn(className, styles.form)} {...props}>
      {children}
    </form>
  )
}
