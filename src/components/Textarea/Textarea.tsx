import cn from 'classnames'
import React from 'react'

import { Form } from '../UI/Form/Form'

import styles from './Textarea.module.css'
import { TextareaProps } from './Textarea.props'

export const Textarea: React.FC<TextareaProps> = ({
  className,
  placeholder,
  ...props
}: TextareaProps) => {
  return (
    <>
      <Form className={cn(className, styles.form)} {...props}>
        <label className={styles.label}>Label</label>
        <div className={styles.wrapperSelect}></div>
        <textarea
          className={styles.textarea}
          placeholder={placeholder}
        ></textarea>
      </Form>
    </>
  )
}
