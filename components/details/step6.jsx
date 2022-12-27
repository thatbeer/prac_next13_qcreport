import React from 'react'
import PsContainer from './pscontainer'
import CheckTab from './checktab'
import { CheckIcon } from '@heroicons/react/24/outline'
const Step6 = () => {
  return (
    <>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-bold'>6. เก็บตะกอน</h1>

          

            <div className='mx-auto w-full relative my-2'>
            <div className=' block '>
            <div className='py-2 border border-gray-600 rounded-t  flex items-center
            justify-center font-bold text-xl bg-blue-200'>
                <h1>ข้อมูลการเก็บตะกอน</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-4 w-1/3 border-r bg-green-200 border-gray-600'>วันที่เริ่ม</th>
                    <td className='p-4 w-2/3 text-start '>26 ธ.ค. 2565 (12:57)</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-4 w-1/3 border-r bg-green-200 border-gray-600'>วันที่เสร็จ</th>
                    <td className='p-4 w-2/3 text-start '>26 ธ.ค. 2565 (13:01)</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-4 w-1/3 border-r bg-green-200 border-gray-600'>ขนาดบัคเก็ตเก็บตะกอน</th>
                    <td className='p-4 w-2/3 text-start '>	1.00</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-4 w-1/3 border-r bg-green-200 border-gray-600'>เครื่องจักร/เครน No.</th>
                    <td className='p-4 w-2/3 text-start '>	PR-15</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-4 w-1/3 border-r bg-green-200 border-gray-600'>คนขับ</th>
                    <td className='p-4 w-2/3 text-start '>บรรยงค์ หล้าพา</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-4 w-1/3 border-r bg-green-200 border-gray-600'>เปลี่ยนบัคเก็ตเจาะเป็นบัคเก็ตเก็บตะกอน</th>
                    <td className='p-4 w-2/3 text-start '>yes</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-4 w-1/3 border-r bg-green-200 border-gray-600'>ระยะเวลารอเก็บตะกอน (นาที)	</th>
                    <td className='p-4 w-2/3 text-start '>30</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-4 w-1/3 border-r bg-green-200 border-gray-600'>ความลึกจากปากเคสซิ่ง(หลังรอเก็บตะกอน) (ม.)</th>
                    <td className='p-4 w-2/3 text-start '>62.7000</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-4 w-1/3 border-r bg-green-200 border-gray-600'>ความหนาของตะกอน (ม.)</th>
                    <td className='p-4 w-2/3 text-start '>0.2000</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-4 w-1/3 border-r bg-green-200 border-gray-600'>ความลึกที่วัดจากปากเคสซิ่ง (ม.)</th>
                    <td className='p-4 w-2/3 text-start '>62.90</td>
                </tr>
                <tr className=' flex border border-x   border-gray-600 items-center text-start justify-between '>
                    <th className='p-4 w-1/3 border-r bg-green-200  border-gray-600'>ความลึกวัดจากปากเคสซิ่ง (หลังเก็บตะกอน) (ม.)</th>
                    <td className='p-4 w-2/3  text-start '>ุ63.10</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>

            

          
            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    <li className='text-sm'>ไม่ได้เปลี่ยนบัคเก็ตเจาะเป็นบัคเก็ตเก็บตะกอน</li>
                    <li className='text-sm'>{"ระยะเวลารอเก็บตะกอน < 30 นาที"}</li>
                    <li className='text-sm'>{"ไม่ได้เช็คดิ่งและ/ความลึกวัดจากปากเคสซิ่งของการเจาะครั้งสุดท้าย < ความลึกที่ต้องการวัดจากปากเคสซิ่ง"}</li>
                </div>
            </div>
            <CheckTab/>





        </div>
    </>
  )
}

export default Step6