import React from 'react'
import PsContainer from './pscontainer'
import CheckTab from './checktab'
import { CheckIcon } from '@heroicons/react/24/outline'


const Step11 = () => {
  return (
    <>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-bold'>11. ถอนเคสซิ่ง</h1>


            <div className='mx-auto w-full relative my-2'>
            <div className=' block '>
            <div className='py-2 border border-gray-600 rounded-t  flex items-center
            justify-center font-bold text-xl bg-blue-200'>
                <h1>ข้อมูลถอนเคสซิ่ง</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>วันที่เริ่ม</th>
                    <td className='p-2 w-2/3 text-start '>	26 ธ.ค. 2565 (14:29)</td>
                    
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>วันที่เสร็จ	</th>
                    <td className='p-2 w-2/3 text-start '>	26 ธ.ค. 2565 (14:02)</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>เครื่องจักร/เครน No.	</th>
                    <td className='p-2 w-2/3 text-start '>CR-20</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>ผู้ขับ</th>
                    <td className='p-2 w-2/3 text-start '>โบ-พงษ์เทพ คิดดีจริง</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>ความลึกคอนกรีต วัดจากผิวดิน (ม.)</th>
                    <td className='p-2 w-2/3 text-start '>3.000</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>ความสูงหัวเข็มหลังถอนเคสซิ่ง (ม.)</th>
                    <td className='p-2 w-2/3 text-start '>2.380</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>ระยะเยิ้มตัวของคอนกรีต (ม.)</th>
                    <td className='p-2 w-2/3 text-start '>-</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>เช็คลูกดิ่ง</th>
                    <td className='p-2 w-2/3 text-start '>Yes</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>เช็คระดับน้ำ</th>
                    <td className='p-2 w-2/3 text-start '>Yes</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>


            <CheckTab/>

            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อความสูงเผื่อหัวเข็มไม่ได้อยู่ในเงื่อนไขดังต่อไปนี้:</h1>
                    <li className='text-sm'>{"1.30 ม. ≤ [ความสูงหัวเข็มหลังถอนเคสซิ่ง] ≤ 1.70 ม."}</li>
                </div>
            </div>

            <h1>Graph</h1>

            











        </div>
    </>
  )
}

export default Step11