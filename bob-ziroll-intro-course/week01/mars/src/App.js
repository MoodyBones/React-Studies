import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
// import { HeroImage } from './components/HeroImage'
import { Footer } from './components/Footer'
import { Todo } from './components/Todo'

function App() {
  return (
    <main className="App">
      <Header />
      {/* <HeroImage /> */}
      <Hero />
      <Todo />
      <Footer />
    </main>
  )
}

export default App
