'use client'
import '../styles/globals.css'
import React  from 'react'
import Authen from './Authen';
import GlobalHeader from './GlobalHeader';
import Mainpage from './Mainpage';
import Skemaincard from '../components/ske-maincard'

function HomePage() {


  return (
    <>
      <GlobalHeader/>
      {/* <Authen /> */}
      {/* <Mainpage/> */}
      <Skemaincard />
    </>
  )
}

export default HomePage