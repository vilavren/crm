import cn from 'classnames'
import React from 'react'

import { Form } from '../UI/Form/Form'

import styles from './Textarea.module.css'
import { TextareaProps } from './Textarea.props'

export const Textarea: React.FC<TextareaProps> = ({
  className,
  placeholder,
  disabled,
  ...props
}) => {
  return (
    <>
      <Form
        className={cn(className, styles.form, {
          [styles.disabled]: disabled === true,
        })}
        {...props}
      >
        <label
          className={cn(className, styles.form, {
            [styles.disabledLabel]: disabled === true,
          })}
        >
          Label
        </label>
        <div className={styles.wrapperSelect}></div>
        <textarea
          className={styles.textarea}
          placeholder={placeholder}
          disabled={disabled}
        ></textarea>
      </Form>
    </>
  )
}
