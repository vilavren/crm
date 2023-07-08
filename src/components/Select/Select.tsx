import cn from 'classnames'
import React from 'react'
import { ReactSVG } from 'react-svg'

import { Form } from '../UI/Form/Form'

import arrowSvg from './arrow.svg'
import styles from './Select.module.css'
import { SelectProps } from './Select.props'

export const Select: React.FC<SelectProps> = ({
  className,
  placeholder,
  ...props
}: SelectProps) => {
  return (
    <>
      <Form className={cn(className, styles.form)} {...props}>
        <label className={styles.label}>Label</label>
        <div className={styles.wrapperSelect}>
          <select className={styles.select} placeholder={placeholder}>
            <option>List Value 1</option>
            <option>один</option>
            <option>один</option>
          </select>
          <ReactSVG className={styles.arrowSvg} src={arrowSvg} />
        </div>
      </Form>
    </>
  )
}
