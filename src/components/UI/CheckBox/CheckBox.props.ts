import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface CheckBoxProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode
  size: 'large' | 'medium' | 'floatLarge' | 'floatMedium'
  appearance: 'primary' | 'secondary' | 'ghost' | 'default' | 'duoColor'

  icon?: 'close' | 'lines' | 'loading' | 'search'
}
