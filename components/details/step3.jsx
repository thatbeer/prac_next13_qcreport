import React from 'react'
import CheckTab from './checktab'
import PsContainer from './pscontainer'

const Step3 = () => {
  return (
    <>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-bold'>3. วัดตำแหน่งก่อนเจาะ</h1>

            
            <div className='mx-auto w-full relative my-2'>
            <div className=' block bg-green-200'>
            <div className='py-2 border border-gray-600 rounded-t  flex items-center
            justify-center font-bold text-xl bg-blue-200'>
                <h1>ข้อมูลการวัดตำแหน่ง</h1>
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
            <div className='py-2 border-x border-gray-600 rounded-t  flex items-center
            justify-center font-bold text-xl bg-blue-200'>
                <h1>ตำแหน่งเคสซิ่ง</h1>
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
                </tbody>
            </table>
            </div>
           
            </div>
            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    <li className='text-sm'>{"ระดับบนท่อปลอกเหล็ก < ระดับพื้นดิน"}</li>
                </div>
            </div>
            <CheckTab active={false} note="จะขึนแถบสีแดงเมื่อมีการป้อนข้อมูลลงหมายเหตุ" />



            <div className='overflow-x-auto my-2 '>  
            <table className=" w-full">
                <thead className='bg-blue-200 rounded'>
                    <tr className=''>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ค่าพิกัดหมุด	</th>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ตามแบบ</th>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>ที่อ่านได้	</th>
                        <th className='p-5 text-sm w-1/4 text-center border border-gray-700 '>คลาดเคลื่อน</th>
                    </tr>
                </thead>
                <tbody className=' '>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>1</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>22222</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>22222</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   bg-green-300 '>0.00</td>
                        </tr>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>2</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>111111</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>11111</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300   '>0.00</td>
                        </tr>
                        
                </tbody>
            </table>
            </div>


            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    <li className='text-sm'>ค่าตำแหน่งเคสซิ่งเยื้องเกิน ± 0.03 ม.</li>
                    <li className='text-sm'>ไม่ได้ใส่รูปภาพหน้ากล้องเซอร์เวย์ที่แสดงค่าพิกัดเข็มที่อ่านได้และระยะคลาดเคลื่อนของค่าพิกัดเข็ม</li>
                </div>
            </div>




        </div>
    </>
  )
}

export default Step3