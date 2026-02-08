import React from 'react'
import Navigation from './Navigation'
import Home_section from './Home_section'
import About from './About'
import Blogs from './Blogs'
import Contact from './Footer'

export default function Home() {
  return (
    <>
     <Navigation/>
     <Home_section/>
     <About/>
     <Blogs/>
     <Contact/>
    </>
  )
}
