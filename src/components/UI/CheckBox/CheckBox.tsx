import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import cn from 'classnames'
import React from 'react'

import styles from './CheckBox.module.css'
import { CheckBoxProps } from './CheckBox.props'

export const CheckBox: React.FC<CheckBoxProps> = ({
  className,
  children,
  appearance,
  ...props
}: CheckBoxProps) => {
  const handleCheckbox = (e: CheckboxChangeEvent | undefined) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <Checkbox
      className={cn(className, styles.checkbox, {
        [styles.primary]: appearance == 'primary',
        [styles.secondary]: appearance == 'secondary',
      })}
      onChange={handleCheckbox}
      {...props}
    >
      {children}
    </Checkbox>
  )
}
