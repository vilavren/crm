import cn from 'classnames'
import React from 'react'

import { Form } from '../UI/Form/Form'

import styles from './Select.module.css'
import { SelectProps } from './Select.props'

export const Select: React.FC<SelectProps> = ({
  className,
  ...props
}: SelectProps) => {
  return (
    <Form border="rectangle" className={cn(className, styles.form)} {...props}>
      <label>
        <select>
          <option>один</option>
          <option>один</option>
          <option>один</option>
        </select>
      </label>
    </Form>
  )
}
