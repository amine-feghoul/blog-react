import React from 'react'
import About from '../About'
import Footer from '../Footer'
import Landing from '../Landing'
import Projects from '../Projects'

function Home() {
    return (
        <div>
          <Landing/>  
          <About/>
          <Projects/>
          <Footer/>
        </div>
    )
}

export default Home
