import React from 'react'
import Statcard from '../Statcard';
import PsContainer from './pscontainer'
import CheckTab from './checktab'
import text from '../../text'
import HeadedTable from './headedtable';

import { CheckIcon } from '@heroicons/react/24/outline'
import {MinusIcon} from '@heroicons/react/24/outline'


const header = [
        {
            Header: "No."
        },
        {
            Header: "Detail"
        },
        {
            Header: "Status"
        },
        {
            Header: "Date"
        },
        {
            Header: "Total"
        }
]

const fakeData = [
    {
        NO : '1',
        Detail:'Red',
        Status : "Quality Control",
        DATE : "12/02/22",
        TOTAL : 4
    },
    {
        NO : '2',
        Detail:'Red',
        Status : "Quality Control",
        DATE : "12/02/22",
        TOTAL : 4
    },
    {
        NO : '3',
        Detail:'Green',
        Status : "Quality Control",
        DATE : "12/02/22",
        TOTAL : 4
    }
]


const Step1 = () => {
    const active = true
    return (
    <>
        <div className='flex flex-col'>
           
           
        
            <h1 className='text-3xl font-bold'>1. เตรียมโครงเหล็ก</h1>
            
       
            
            <div className='mx-auto w-full relative my-2'>
            <div className=' block bg-green-200'>
            <div className='py-2 border border-gray-600 rounded-t  flex items-center
            justify-center font-bold text-xl bg-blue-200'>
                <h1>ข้อมูลการเตรียมโครงเหล็ก</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r border-gray-600'>วันที่เริ่ม</th>
                    <td className='p-2 w-2/3 text-start bg-white'>25 ธ.ค. 2565 (14:01)</td>
                </tr>
                <tr className='flex border-b border-x border-gray-600  items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r border-gray-600'>วันที่เสร็จ</th>
                    <td className='p-2 w-2/3 text-start bg-white'>25 ธ.ค. 2565 (14:05)</td>
                </tr>
                <tr className='flex border-b border-x border-gray-600  items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r border-gray-600'>เคสซิ่ง ∅ (ม.)</th>
                    <td className='p-2 w-2/3 text-start bg-white'>1.20</td>
                </tr>
                <tr className='flex border-b border-x border-gray-600  items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r border-gray-600'>ความยาว (ม.)</th>
                    <td className='p-2 w-2/3 text-start bg-white'>15.000</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>
            

          

            <div className='overflow-x-auto my-2 '>  
            <table className=" w-full">
                <thead className='bg-blue-200 rounded'>
                    <tr>
                        <th className='p-5 text-sm w-1/7 text-center border border-gray-700 '>โครง</th>
                        <th className='p-5 text-sm w-1/7 text-center border border-gray-700 '>ตามแบบ</th>
                        <th className='p-5 text-sm w-1/7 text-center border border-gray-700 '>ลูกปูน</th>
                        <th className='p-5 text-sm w-2/3 text-center border border-gray-700 '><pre className='border-b border-dashed border-gray-600'>MainBar</pre>Spiral</th>
                        
                    </tr>
                </thead>
                <tbody className=' '>
                   
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>1</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto"/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto "/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   '><pre className='border-b border-dashed border-gray-600'>หลัก: 12-DB20 SD40 x 8.9500 m.</pre>ช่วงที่ 1: RB9 SR24 x 7.500 m. @0.200</td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>2</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto"/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto "/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   '><pre className='border-b border-dashed border-gray-600'>หลัก: 12-DB20 SD40 x 8.9500 m.</pre>ช่วงที่ 1: RB9 SR24 x 7.500 m. @0.200</td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>3</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto"/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto "/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   '><pre className='border-b border-dashed border-gray-600'>หลัก: 12-DB20 SD40 x 8.9500 m.</pre>ช่วงที่ 1: RB9 SR24 x 7.500 m. @0.200</td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>4</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto"/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto "/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   '><pre className='border-b border-dashed border-gray-600'>หลัก: 12-DB20 SD40 x 8.9500 m.</pre>ช่วงที่ 1: RB9 SR24 x 7.500 m. @0.200</td>
                        </tr>
               
        

                </tbody>
            </table>
        </div>
            
            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    <li className='text-sm'>ไม่ได้ทำการติ๊กตรวจสอบโครงเหล็กหรือตรวจสอบโครงเหล็กไม่ครบทุกโครง</li>
                    <li className='text-sm'>ไม่ได้ใส่รูปภาพโครงเหล็ก / ลูกปูน หรือใส่รูปภาพโครงเหล็ก / ลูกปูนไม่ครบทุกโครง</li>
                </div>
            </div>
            
            {/* green/red tab */}
            <CheckTab note={"จะขึ้นแถบสีแดงเมื่อมีการป้อนข้อมูลในหมายเหตุ"} />
        </div>
    </>
  )
}

export default Step1