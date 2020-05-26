import React, { useState, useRef } from 'react'
import './styles/font.css'
import './styles/global.scss'
import { useOnClickOutside } from './hooks'
import { Burger } from './components/Burger'
import { Menu } from './components/Menu'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { Todo } from './components/Todo'
import FocusLock from 'react-focus-lock'
// import { HeroImage } from './components/HeroImage'
// import { Layout } from './components/Layout'

function App() {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = 'main-menu'

  useOnClickOutside(node, () => setOpen(false))

  return (
    <main className="App">
      <nav ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </nav>
      <Header />
      {/* <HeroImage /> */}
      <Hero />
      <Todo />
      <Footer />
    </main>
  )
}

export default App
