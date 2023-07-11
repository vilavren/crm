import cn from 'classnames'
import React from 'react'

import styles from './CheckBox.module.css'
import { CheckBoxProps } from './CheckBox.props'

export const CheckBox: React.FC<CheckBoxProps> = ({
  className,
  ...props
}: CheckBoxProps) => {
  return <input className={cn(styles.checkBox, className)} {...props} />
}
