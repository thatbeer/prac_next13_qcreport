import React from 'react'
import PsContainer from './pscontainer'
import CheckTab from './checktab'
import { CheckIcon } from '@heroicons/react/24/outline'

const Step8 = () => {
  return (
    <>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-bold'>8. ลงท่อเทรมี่ / เม็ดโฟม</h1>

            <div className='mx-auto w-full relative my-2'>
            <div className=' block '>
            <div className='py-2 border border-gray-600 rounded-t  flex items-center
            justify-center font-bold text-xl bg-blue-200'>
                <h1>ข้อมูลการลงโครงเหล็ก</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>วันที่เริ่ม</th>
                    <td className='p-2 w-2/3 text-start '>26 ธ.ค. 2565 (14:29)</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>วันที่เสร็จ	</th>
                    <td className='p-2 w-2/3 text-start '>26 ธ.ค. 2565 (14:02)</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>เครื่องจักร/เครน No.	</th>
                    <td className='p-2 w-2/3 text-start '>CR-20</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>ผู้ขับ</th>
                    <td className='p-2 w-2/3 text-start '>	โบ-พงษ์เทพ คิดดีจริง</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>ใส่เม็ดโฟมแล้ว</th>
                    <td className='p-2 w-2/3 text-start '></td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>ความยาวท่อเทรมีรวม (ม.)</th>
                    <td className='p-2 w-2/3 text-start '>0.500</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>


           
            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อความยาวท่อเทรมี่รวมไม่ได้อยู่ในเงื่อนไขดังต่อไปนี้:</h1>
                    <li className='text-sm'>{"[ความลึกวัดจากปากเคสซิ่ง (หลังเก็บตะกอน) - 1.5 ม.] < [ความยาวท่อเทรมีรวม] < [ความลึกวัดจากปากเคสซิ่ง (หลังเก็บตะกอน)]"}</li>
                </div>
            </div>
            <CheckTab />

            

            <div className='overflow-x-auto my-2 '>  
            <table className=" w-full">
                <thead className='bg-blue-200 rounded'>
                    <tr className=''>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ลำดับ</th>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ขนาดท่อ(นิ้ว)</th>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ความยาว(ม.)</th>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ท่อสุดท้าย</th>
                    </tr>
                </thead>
                <tbody className=' '>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>13</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>10</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>1.10</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '></td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>1</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>10</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>6.10</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700    '></td>
                        </tr>
                        
                </tbody>
            </table>
            </div>







            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อความยาวท่อเทรมี่รวมไม่ได้อยู่ในเงื่อนไขดังต่อไปนี้:</h1>
                    <li className='text-sm'>{"กรณีเสาเข็มมีขนาด ∅ > 1 ม. ควรใช้ขนาดท่อเทรมี่ ∅ ≥ 10 นิ้ว"}</li>
                </div>
            </div>







        </div>
    </>
  )
}

export default Step8