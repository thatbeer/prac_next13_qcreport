import React from 'react'
import PsContainer from './pscontainer'
import CheckTab from './checktab'
import { CheckIcon } from '@heroicons/react/24/outline'


const Step10 = () => {
  return (
    <>
        <div className='flex flex-col' >
            <h1 className='text-3xl font-bold'>10. เทคอนกรีต</h1>


            <div className='mx-auto w-full relative my-2'>
            <div className=' block '>
            <div className='py-2 border border-gray-600 rounded-t  flex items-center
            justify-center font-bold text-xl bg-blue-200'>
                <h1>ข้อมูลการเทตอนกรีต</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>ชุดโฟร์แมน</th>
                    <td className='p-2 w-2/3 text-start '>ชุดที่ 1 นาย-สมพร</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>โฟร์แมนควบคุมงาน</th>
                    <td className='p-2 w-2/3 text-start '>กุศล อยู่เป็นสุข</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>ท้องฟ้าโปร่ง</th>
                    <td className='p-2 w-2/3 text-start '>Yes</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>มีเมฆมาก</th>
                    <td className='p-2 w-2/3 text-start '>CR-20</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>ฝนตก</th>
                    <td className='p-2 w-2/3 text-start '>-</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>

            <CheckTab />


            <div className='overflow-x-auto my-2 '>  
            <table className=" w-full">
                <thead className='bg-blue-200 rounded'>
                    <tr>
                        <th className='p-5 text-sm text-center border border-gray-700 '>คันที่เลขรถ</th>
                        <th className='p-5 text-sm  text-center border border-gray-700 '>คอนกรีตสะสม(ลก.ม.)</th>
                        <th className='p-5 text-sm  text-center border border-gray-700 '>ความลึกคอนกรีตจากปากเคสซิ่ง (ลก.ม.)</th>
                        <th className='p-5 text-sm  text-center border border-gray-700 '>ขนาดหน้าตัดที่คำนวณ (ลก.ม.)</th>
                        <th className='p-5 text-sm  text-center border border-gray-700 '>ความยาวท่อเทรมี่ที่จมหลังเท (ม.)</th>
                        <th className='p-5 text-sm  text-center border border-gray-700 '>จำนวนที่ตัด(ท่อน)</th>

                        <th className='p-0  text-sm  text-center border border-gray-700 w-1/5 h-full'>
                          <div className='flex  flex-col items-center justify-between h-full'>
                            <tr className='p-2 border-b border-gray-700 text-sm text-center w-full'>
                              <th colSpan={3} className="flex justify-center">ความยาวท่อเทรมี(ม.)</th>
                            </tr>
                            <tr className=' w-full h-full'  >
                              <th className='p-4 text-sm text-center border-r border-gray-700'>ที่ตัด</th>
                              <th className='p-4 text-sm text-center border-r border-gray-700'>ที่เหลือ</th>
                              <th className='p-4 text-sm text-center '>ที่จมหลังตัด</th>
                            </tr>
                          </div>
                        </th>
                        <th className='p-0  text-sm  text-center border border-gray-700 w-1/5'>
                          <div className='flex flex-col items-center justify-between'>
                            <tr className='p-1 text-sm text-center '>
                              <th colSpan={3}>ความยาวท่อเทรมี(ม.)</th>
                            </tr>
                            <tr className='bg-red-200 w-full'  >
                              <th className='p-4 text-sm text-center border-r border-gray-700'>ที่ตัด</th>
                              <th className='p-4 text-sm text-center border-r border-gray-700 '>ที่เหลือ</th>
                              <th className='p-4 text-sm text-center '>ที่จมหลังตัด</th>
                            </tr>
                          </div>
                        </th>
                        
                    </tr>
                </thead>
                <tbody className=' '>
                   
                        {/* <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>ุ6</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 bg-green-300 '><CheckIcon class="w-6 h-6 mx-auto"/></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   '><pre className='border-b border-dashed border-gray-600'>หลัก: 12-DB20 SD40 x 8.9500 m.</pre>ช่วงที่ 1: RB9 SR24 x 7.500 m. @0.200</td>
                        </tr> */}
                        
                     
          
                    </tbody>
                </table>
             </div>




            

            <div className='mx-auto w-full relative my-2'>
            <table className='w-full'>
                <tbody className=' '>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 border-r w-1/4 bg-green-200 border-gray-600'>Ø เฉลี่ย (ม.)</th>
                    <td className='p-2   border-gray-600 text-start '>11</td>
                    <th className='p-2 border-r w-1/3  bg-green-200 border-gray-600'>คอนกรีตขึ้นทะเบียน (ม3)</th>
                    <td className='p-2   border-gray-600 text-start '>11</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 it1ems-center text-start justify-between '>
                    <th className='p-2 border-r w-1/4 bg-green-200 border-gray-600'>Ø ฟันข้าง (ม.)</th>
                    <td className='p-2   border-gray-600 text-start '>11</td>
                    <th className='p-2 border-r w-1/3  bg-green-200 border-gray-600'>	คอนกรีต New Quota (ม3)</th>
                    <td className='p-2   border-gray-600 text-start '>11</td>
                </tr>
                <tr className=' flex border h-full bg-red-200 border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 border-r w-1/4 my-auto bg-green-200 border-gray-600'>น้ำหนักเหล็ก (กก.)</th>
                    <td className='p-2   border-gray-600 text-start '>11</td>
                    <th className='p-2 border-r w-1/3  bg-green-200 border-gray-600'>ความสูงหัวเข็มก่อนถอนเคสซิ่ง (ม.)	</th>
                    <td className='p-2   border-gray-600 text-start '>11</td>
                </tr>
                
                
                
                </tbody>
            </table>
            </div>


            <div className='mx-auto w-full relative my-2'>
            <div className=' block '>
            <div className='py-2 border border-gray-600 rounded-t  flex items-center
            justify-center font-bold text-xl bg-blue-200'>
                <h1>ข้อมูลคอนกรีตที่เหลือจากการเท</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>ปริมาณคอนกรีตที่เหลือ (ม3)</th>
                    <td className='p-2 w-2/3 text-start '>0.00</td>
                </tr>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>นำคอนกรีตที่เหลือไปใช้</th>
                    <td className='p-2 w-2/3 text-start '>-</td>
                </tr>
              
                
                </tbody>
            </table>
            </div>
            </div>

            <h1>Graph</h1>


            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ช่องข้อมูลในตารางเทคอนกรีตจะเป็นสีแดงถ้าพบว่า:</h1>
                    <li className='text-sm'>ตัดท่อเทรมี่มากกว่า 2 ท่อน</li>
                    <li className='text-sm'>ท่อเทรมี่จมในคอนกรีตเกิน 12 ม.</li>
                    <li className='text-sm'>ความยาวท่อเทรมี่จมหลังตัดน้อยกว่า 3 ม.</li>
                    <li className='text-sm'>ขนาดหน้าตัดที่คำนวณ น้อยกว่า 95% ของขนาดเสาเข็ม</li>
                    <li className='text-sm'>ขนาดหน้าตัดเฉลี่ยน้อยกว่า 97% ของขนาดเสาเข็ม</li>
                    <li className='text-sm'>{"ปริมาณคอนกรีตขึ้นทะเบียน > ปริมาณคอนกรีต New Quota"}</li>
                </div>
            </div>




        </div>
    </>
  )
}

export default Step10