import React from 'react'
import CheckTab from './checktab'
import { CheckIcon } from '@heroicons/react/24/outline'
import DyCarousel from '../Dy-carousel';


const Step5 = () => {
  return (
    <>
        <div className='flex flex-col'>
            {/* <h1 className='text-3xl font-bold'>5. เจาะเสาเข็ม</h1> */}

            {/* bored pile */}
            <div className='mx-auto w-full relative my-2'>
            <div className=' block bg-white'>
            <div className='py-1 border border-gray-600 rounded-t  flex items-center
            justify-start font-bold  bg-blue-200'>
                <h1 className='mx-2'>ข้อมูลการเจาะ</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className='  border border-x border-gray-600  '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>เช็คลูกดิ่ง</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-400  '><CheckIcon className='h-5 w-5'/></td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>เช็คระดับน้ำ</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-400 '><CheckIcon className='h-5 w-5'/></td>
                </tr>
                </tbody>
            </table>
            <div className='py-1 border-x border-gray-600 rounded-t  flex items-center
            justify-start font-bold  bg-blue-200'>
                <h1 className='mx-2'>ข้อมูลเสาเข็ม</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className='  border border-x border-gray-600  '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>1.ระดับบนท่อปลอกเหล็ก (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-400 '>0.4750</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>2.ระดับพื้นดิน (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-400  '>-0.2200</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>3.ระดับตัดหัวเสาเข็ม (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-400 '>-5.6000</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>4.ความยาวเคสซิ่ง(ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm  '>15.000(จากขั้นตอนที่ 2 ปักเคสซิ่ง)</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>5.ระดับปลายเสาเข็ม (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm '>-62.0000</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>6.ความลึกที่ต้องการวัดจากปากเคสซิ่ง (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm '>62.4750(ระดับบนท่อปลอกเหล็ก - ระดับปลายเสาเข็ม)</td>
                </tr>
                </tbody>
            </table>
            <div className='py-1 border-x border-gray-700  flex items-center
            justify-start font-bold  bg-blue-200'>
                <h1 className='mx-2'>ข้อมูลการเตรียมเหล็กหิ้วโครง</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className='  border border-x border-gray-600  '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>ระยะเผื่อโครงเหล็กจม (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-400  '>0.500</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>ความสูงจุดหิ้วโครงเหล็กเหนือระดับตัดหัวเข็ม (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm  '>0.500</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>เหล็กหิ้วโครงยาวไม่เกิน (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm  '>5.075</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>เหล็กหิ้วโครงที่วัดได้ (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm '>4.900</td>
                </tr>
                </tbody>
            </table>
            
            </div>
            </div>

            {/* Dwall */}
            <div className='mx-auto w-full relative my-2'>
            <div className=' block bg-white'>
            <div className='py-1 border border-gray-600 rounded-t  flex items-center
            justify-start font-bold  bg-blue-200'>
                <h1 className='mx-2'>ข้อมูลการเจาะ</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className='  border border-x border-gray-600  '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>เช็คลูกดิ่ง</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-400  '><CheckIcon className='h-5 w-5'/></td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>เช็คระดับน้ำ</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-400 '><CheckIcon className='h-5 w-5'/></td>
                </tr>
                </tbody>
            </table>
            <div className='py-1 border-x border-gray-600 rounded-t  flex items-center
            justify-start font-bold  bg-blue-200'>
                <h1 className='mx-2'>ข้อมูลเสาเข็ม</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className='  border border-x border-gray-600  '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>1.ระดับพื้นดิน (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-400 '>0.4750</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>2.ระดับท็อปไกด์วอลล์ (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-400  '>-0.2200</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>3.ระดับล่างไกด์วอลล์ (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-400 '>-5.6000</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>4.ระดับตัดหัวเสาเข็ม (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm  '>15.000(จากขั้นตอนที่ 2 ปักเคสซิ่ง)</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>5.ระดับปลายเสาเข็ม (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm '>-62.0000</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>6.ความลึกที่ต้องการวัดจากท็อปไกด์วอลล์ (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm '>62.4750(ระดับบนท่อปลอกเหล็ก - ระดับปลายเสาเข็ม)</td>
                </tr>
                </tbody>
            </table>
            <div className='py-1 border-x border-gray-700  flex items-center
            justify-start font-bold  bg-blue-200'>
                <h1 className='mx-2'>ข้อมูลการเตรียมเหล็กหิ้วโครง</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className='  border border-x border-gray-600  '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>ระยะเผื่อโครงเหล็กจม (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm bg-green-400  '>0.500</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>ความสูงจุดหิ้วโครงเหล็กเหนือระดับตัดหัวเข็ม (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm  '>0.500</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>เหล็กหิ้วโครงยาวไม่เกิน (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm  '>5.075</td>
                </tr>
                <tr className=' border-b border-x border-gray-600   '>
                    <th className='px-2 py-1 w-3/5  lg:w-1/3 text-start text-sm border-r bg-green-100 border-gray-600'>เหล็กหิ้วโครงที่วัดได้ (ม.)</th>
                    <td className='px-2 py-1 w-2/5  lg:w-2/3 text-start text-sm '>4.900</td>
                </tr>
                </tbody>
            </table>
            
            </div>
            </div>



            
            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold '>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    <li className='text-sm'>ไม่ได้เช็คดิ่งและ/หรือเช็คระดับน้ำก่อนเจาะเสาเข็ม</li>
                    <li className='text-sm'>{"ระดับบนท่อปลอกเหล็ก < ระดับพื้นดิน"}</li>
                    <li className='text-sm'>{"ระดับพื้นดิน < ระดับตัดหัวเสาเข็ม"}</li>
                    <li className='text-sm'>ไม่ได้เช็คลูกดิ่งและ/หรือเช็คระดับน้ำก่อนเจาะเสาเข็ม</li>
                    <li className='text-sm'>{"ระดับบนท็อปไกด์วอลล์ < ระดับพื้นดิน"}</li>
                    <li className='text-sm'>{"ระดับพื้นดิน < ระดับตัดหัวเสาเข็ม"}</li>
                    <li className='text-sm'>{"ระยะเผื่อโครงเหล็กจม < 0.300 ม."}</li>
                </div>
            </div>
            
            <CheckTab/>


            <div className='overflow-x-auto my-2 '>  
            <table className=" table-fixed lg:table-none w-full">
                <thead className='bg-blue-200 rounded'>
                    <tr className=''>
                        <th className='px-2 py-1 w-[180px] mx-auto text-sm  border border-gray-700 hidden'></th>
                        <th className='px-2 py-1 w-[180px] mx-auto text-sm  border border-gray-700'>ลำดับหัวเจาะ</th>
                        <th className='px-2 py-1 w-[180px] mx-auto text-sm  border border-gray-700 '>ความลึกวัดจากปากเคสซิ่ง(ม.)</th>
                        <th className='px-2 py-1 w-[180px] mx-auto  text-sm  border border-gray-700 '>เครื่องจักร/เครน No.</th>
                        <th className='px-2 py-1 w-[180px] mx-auto  text-sm  border border-gray-700 '>เครื่องเจาะ</th>
                        <th className='px-2 py-1 w-[180px] mx-auto  text-sm  border border-gray-700 '>วัน/เวลา (เริ่ม-หยุดเจาะเสาเข็ม)</th>
                        <th className='px-2 py-1 w-[180px] mx-auto  text-sm  border border-gray-700 '>คนขับ</th>
                        <th className='px-2 py-1 w-[180px] mx-auto  text-sm  border border-gray-700 '>หลุมพัง</th>
                        <th className='px-2 py-1 w-[180px] mx-auto  text-sm  border border-gray-700 '>ขนาดฟันข้างของบัคเก็ต(ม.)</th>
                    </tr>
                </thead>
                <tbody className='2.บัคเก็ต '>
                        <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='px-2 py-1 border-x border-gray-700  '>1.สว่าน</td>
                            <td className='px-2 py-1 border-r border-gray-700  '>14.700</td>
                            <td className='px-2 py-1 border-r border-gray-700 '></td>
                            <td className='px-2 py-1 border-r border-gray-700  '>PR-15</td>
                            <td className='px-2 py-1 border-r border-gray-700 '>26 ธ.ค. 2565 (08:29 - 08:58)</td>
                            <td className='px-2 py-1 border-r border-gray-700 '>อรรณพ สิงห์ประเสริฐ</td>
                            <td className='px-2 py-1 border-r border-gray-700 '></td>
                            <td className='px-2 py-1 border-r border-gray-700 '>-</td>
                        </tr>
                        {/* <tr  className="text-center border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>2.บัคเก็ต</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>14.700</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 '></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>PR-15</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 '>26 ธ.ค. 2565 (08:29 - 08:58)</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 '>อรรณพ สิงห์ประเสริฐ</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 '></td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 '>-</td>
                        </tr> */}
                        
                </tbody>
            </table>
            </div>

            <h1>corousel show picture</h1>
            <DyCarousel />

            {/* ps tab */}
            <div className='relative mt-2'>
                <div className='mx-1'>
                    <h1 className='text-sm font-bold'>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h1>
                    <li className='text-sm'>{"ความลึกวัดจากปากเคสซิ่งของการเจาะครั้งสุดท้าย < ความลึกที่ต้องการวัดจากปากเคสซิ่ง"}</li>
                    <li className='text-sm'>{"ความลึกวัดจากปากเคสซิ่งของการเจาะครั้งสุดท้าย < ความลึกที่ต้องการวัดจากปากเคสซิ่ง"}</li>
                </div>
            </div>





        </div>
    </>
  )
}

export default Step5