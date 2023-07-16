import cn from 'classnames'
import React from 'react'
import { ReactSVG } from 'react-svg'

import styles from './Button.module.css'
import { ButtonProps } from './Button.props'
import closeSvg from './close.svg'
import lines from './lines.svg'

export const Button: React.FC<ButtonProps> = ({
  children,
  size,
  appearance,
  icon,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.secondary]: appearance == 'secondary',
        [styles.ghost]: appearance == 'ghost',
        [styles.default]: appearance == 'default',
        [styles.duoColor]: appearance == 'duoColor',
        [styles.large]: size == 'large',
        [styles.medium]: size == 'medium',
        [styles.floatLarge]: size == 'floatLarge',
        [styles.floatMedium]: size == 'floatMedium',
      })}
      {...props}
    >
      {icon === 'close' && <ReactSVG width={16} height={16} src={closeSvg} />}
      {icon === 'lines' && <ReactSVG width={16} height={16} src={lines} />}
      {children}
    </button>
  )
}
