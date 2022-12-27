import React from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import {MinusIcon} from '@heroicons/react/24/outline'

const exist = true
const pass1 = true
const pass2 = false


const HeadlessTable = () => {
  return (
    <>
        
        <div className='mx-auto w-full relative my-2'>
          <div className=' block bg-green-200'>
          <div className='py-2 border border-gray-600 rounded-t  flex items-center
           justify-center font-bold text-xl bg-blue-200'>
            <h1>ข้อมูลการปักเคสซิ่ง</h1>
          </div>
          <table className='w-full'>
            <tbody className=' '>
              <tr className=' flex border border-x border-gray-600 items-center text-center justify-between '>
                <th className='p-2 w-1/3 border-r border-gray-600'>วันที่เริ่ม</th>
                <td className='p-2 w-2/3 text-start bg-white'>25 ธ.ค. 2565 (14:01)</td>
              </tr>
              <tr className='flex border-b border-x border-gray-600  items-center text-center justify-between '>
                <th className='p-2 w-1/3 border-r border-gray-600'>วันที่เสร็จ</th>
                <td className='p-2 w-2/3 text-start bg-white'>25 ธ.ค. 2565 (14:05)</td>
              </tr>
              <tr className='flex border-b border-x border-gray-600  items-center text-center justify-between '>
                <th className='p-2 w-1/3 border-r border-gray-600'>เคสซิ่ง ∅ (ม.)</th>
                <td className='p-2 w-2/3 text-start bg-white'>1.20</td>
              </tr>
              <tr className='flex border-b border-x border-gray-600  items-center text-center justify-between '>
                <th className='p-2 w-1/3 border-r border-gray-600'>ความยาว (ม.)</th>
                <td className='p-2 w-2/3 text-start bg-white'>15.000</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
    </>
  )
}

export default HeadlessTable