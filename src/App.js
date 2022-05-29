import React from 'react'

import {Header,Footer,Skills,About,Testimonials,Works} from './containers';
import {Navbar} from './components';
import './App.scss';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Works/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App;