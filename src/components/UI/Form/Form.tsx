import cn from 'classnames'
import React from 'react'

import styles from './Form.module.css'
import { FormProps } from './Form.props'

export const Form: React.FC<FormProps> = ({
  className,
  children,
  border,
  ...props
}: FormProps) => {
  return (
    <form
      className={cn(className, styles.form, {
        [styles.rectangle]: border === 'rectangle',
        [styles.circle]: border === 'circle',
      })}
      {...props}
    >
      {children}
    </form>
  )
}
