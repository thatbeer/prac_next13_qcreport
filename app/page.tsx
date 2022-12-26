'use client'
import '../styles/globals.css'
import React  from 'react'
import Authen from './Authen';
import GlobalHeader from './GlobalHeader';
import Mainpage from './Mainpage';
import Skemaincard from '../components/ske-maincard'
import Secondpage from './Secondpage'
import Adminspage from './Adminspage';
import DetailPage from './DetailPage';



// const pic_url ="https://www.bsinterplas.com/wp-content/uploads/2016/05/bg.jpg"
// // style={{backgroundColor: `url(${pic_url})`




function HomePage() {


  return (
    <>
      <main className=''>
        <div className='fixed  top-0 z-40 w-full'>
          <GlobalHeader/>
        </div>
        <div className='pt-[64px]'>
          {/* <Authen /> */}
          {/* <Mainpage/> */}
          {/* <Skemaincard /> */}
          <hr/>
          {/* <Secondpage/> */}
          {/* <Adminspage /> */}
          <DetailPage />

        </div>
      </main>
    </>
  )
}

export default HomePage