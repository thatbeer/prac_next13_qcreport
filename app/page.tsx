'use client'
import '../styles/globals.css'
import React  from 'react'
import Authen from './Authen';
import GlobalHeader from './GlobalHeader';
import Mainpage from './Mainpage';


function HomePage() {


  return (
    <>
      <GlobalHeader/>
      {/* <Authen /> */}
      <Mainpage/>
    </>
  )
}

export default HomePage