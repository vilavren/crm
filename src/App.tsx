import React from 'react'

import './App.css'
import { Search } from './components/Search/Search'
import { Select } from './components/Select/Select'
import { Textarea } from './components/Textarea/Textarea'
import { Button } from './components/UI/Button/Button'
import { Input } from './components/UI/Input/Input'

function App() {
  return (
    <div className="App">
      <Button size="large" appearance="primary">
        DEFAULT
      </Button>
      <Button size="large" appearance="secondary">
        DEFAULT
      </Button>
      <Button size="large" appearance="primary" disabled>
        primary
      </Button>
      <Button size="large" appearance="secondary" disabled>
        secondary
      </Button>
      <Button size="large" appearance="ghost">
        DEFAULT
      </Button>
      <Button size="large" appearance="ghost" disabled>
        DEFAULT
      </Button>

      <Button size="medium" appearance="primary">
        DEFAULT
      </Button>
      <Button size="medium" appearance="secondary">
        DEFAULT
      </Button>
      <Button size="medium" appearance="primary" disabled>
        primary
      </Button>
      <Button size="medium" appearance="secondary" disabled>
        secondary
      </Button>
      <Button size="medium" appearance="ghost">
        DEFAULT
      </Button>
      <Button size="medium" appearance="ghost" disabled>
        DEFAULT
      </Button>

      <Button size="floatLarge" appearance="primary" icon="close" />
      <Button size="floatLarge" appearance="secondary" icon="close" />
      <Button size="floatLarge" appearance="duoColor" icon="close" />

      <Button size="floatMedium" appearance="primary" icon="lines" />
      <Button size="floatMedium" appearance="secondary" icon="lines" />
      <Button size="floatMedium" appearance="duoColor" icon="lines" />
      <Input />
      <Search />
      <Select placeholder="Label" />
      <Textarea placeholder="Label" />
    </div>
  )
}

export default App
