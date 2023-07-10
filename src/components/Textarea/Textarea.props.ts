import { type } from 'os'

import { DetailedHTMLProps, FormHTMLAttributes } from 'react'

export interface TextareaProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  disabled?: boolean
}
