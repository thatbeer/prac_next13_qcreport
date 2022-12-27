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
import PsNote from '../components/utils/PsNote';
import PsContainer from '../components/details/pscontainer'
import Carousel from '../components/Carousel'
import DyCarousel from '../components/Dy-carousel';
// const pic_url ="https://www.bsinterplas.com/wp-content/uploads/2016/05/bg.jpg"
// // style={{backgroundColor: `url(${pic_url})`

const datas = [
  {
      "id": 1,
      "title": "ข้อมูลจะขึ้นแถบสีแดงเมื่อ:",
      "tags" : [
          {
              "note" : "ไม่ได้ทำการติ๊กตรวจสอบโครงเหล็กหรือตรวจสอบโครงเหล็กไม่ครบทุกโครง"
          },
          {
              "note" : "ไม่ได้ใส่รูปภาพโครงเหล็ก / ลูกปูน หรือใส่รูปภาพโครงเหล็ก / ลูกปูนไม่ครบทุกโครง"
          }
      ]
  }
];



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
          {/* <Secondpage/> */}
          {/* <Adminspage /> */}
          {/* <DetailPage /> */}
          {/* <div className='mx-auto px-2 my-4 flex flex-col w-full md:w-2/3'>
            <div className='
             border border-gray-700  '>
              <Carousel />

            </div>

          </div> */}
        </div>
      </main>
    </>
  )
}

export default HomePage