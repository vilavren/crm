import { ReactNode } from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  size: 'large' | 'medium' | 'floatLarge' | 'floatMedium'
  appearance: 'primary' | 'secondary' | 'ghost' | 'default' | 'duoColor'

  icon?: 'close' | 'lines' | 'loading' | 'search'
}
