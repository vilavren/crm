import cn from 'classnames'
import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'

import { Form } from '../UI/Form/Form'
import { Input } from '../UI/Input/Input'

import closeSvg from './close.svg'
import styles from './Search.module.css'
import { SearchProps } from './Search.props'
import searchSvg from './search.svg'

export const Search: React.FC<SearchProps> = ({
  className,
  ...props
}: SearchProps) => {
  const [search, setSearch] = useState<string>('')

  return (
    <Form className={cn(className, styles.form)} {...props}>
      <ReactSVG className={styles.searchSvg} src={searchSvg} />
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value)
        }}
      />
      <button className={styles.button}>
        <ReactSVG src={closeSvg} />
      </button>
    </Form>
  )
}
