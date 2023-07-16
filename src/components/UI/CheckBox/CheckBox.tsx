import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import cn from 'classnames'
import React from 'react'

import styles from './CheckBox.module.css'
import { CheckBoxProps } from './CheckBox.props'

export const CheckBox: React.FC<CheckBoxProps> = ({ className, children }) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <Checkbox className={cn(className, styles.checkbox)} onChange={onChange}>
      {children}
    </Checkbox>
  )
}
