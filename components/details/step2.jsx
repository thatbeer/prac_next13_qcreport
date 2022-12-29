import React from 'react'
import CheckTab from './checktab';
import HeadlessTable from './headlesstable';
import PsContainer from './pscontainer';



const Step2 = () => {
  return (
    <>
        <div className='flex flex-col'>
        {/* <h1 className='text-3xl font-bold'>2. ปักเคสซิ่ง</h1> */}
        <HeadlessTable />
        <CheckTab active={true} note={"จะขึ้นแถบสีแดงเมื่อมีการป้อนข้อมูลในหมายเหตุ"}/>
        {/* ps tab */}
        <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    <li className='text-sm'>ไม่ได้เช็คลูกดิ่งและ/หรือเช็คระดับน้ำในขณะที่ทำการปักเคสซิ่ง</li>
                </div>
            </div>
        </div>
    </>
  )
}

export default Step2