'use client'
import '../styles/globals.css'
import React  from 'react'
import Authen from './Authen';
import GlobalHeader from './GlobalHeader';
import Mainpage from './Mainpage';
import Skemaincard from '../components/ske-maincard'
import Secondpage from './Secondpage'
// const pic_url ="https://www.bsinterplas.com/wp-content/uploads/2016/05/bg.jpg"
// // style={{backgroundColor: `url(${pic_url})`



function HomePage() {


  return (
    <>
      <main className=''>
        <div className='sticky top-0 z-40 w-full'>
        <GlobalHeader/>

        </div>
        {/* <Authen /> */}
        {/* <Mainpage/> */}
        {/* <Skemaincard /> */}
        <hr/>
        <Secondpage/>
      </main>
    </>
  )
}

export default HomePage