import { ReactNode } from 'react'

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}
