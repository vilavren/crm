import { DetailedHTMLProps, FormHTMLAttributes } from 'react'

export interface SelectProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  placeholder: string
}
