import React from 'react';
// import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import MainContent from './components/MainContent'
import Skills from './components/Skills'
import Footer from './components/Footer'



function App() {
  return (
    <div className='app-container'>
        <Nav />
        <Header />
        <MainContent />
        <Skills />
        <Footer />
    </div>
  )
}

export default App

