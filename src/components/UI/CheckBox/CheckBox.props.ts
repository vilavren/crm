import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface CheckBoxProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children?: ReactNode
  appearance?: 'primary' | 'secondary'
}
