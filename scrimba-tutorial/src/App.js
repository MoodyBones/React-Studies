import React from 'react';
// import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import MainContent from './components/MainContent'
import Skills from './components/Skills'
import ContactCardMain from './components/ContactCard/ContactCardMain'
import JokesMain from './components/Jokes/JokesMain'
import Footer from './components/Footer'



function App() {
  return (
    <div className='app-container'>
        <Nav />
        <Header />
        <MainContent />
        <Skills />
        <JokesMain />
        <ContactCardMain />
        <Footer />
    </div>
  )
}

export default App

