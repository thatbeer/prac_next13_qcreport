import React from 'react'
import Statcard from '../Statcard';


const Step1 = () => {
  return (
    <>
        <div className='flex flex-col'>
            {/* first container */}
            <Statcard/>
            {/* second contianer */}
            <div className='container mx-auto my-2 w-full items-center justify-center'>
                <h1 className='text-3xl font-bold'>1. เตรียมโครงเหล็ก</h1>
                <div className='overflow-x-auto bg-slate-600 border-gray-800 rounded-lg m-2'>
                    <table className='table w-full'>
                        <thead className=' bg-red-300'>
                            <tr className='w-full bg-sky-300'>
                                <th className='text-3xl  font-bold col-span'>ข้อมูลการเตรียมโครงเหล็ก</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-red-300'>
                                <th className='w-1/3 bg-sky-300 '>วันที่เริ่ม</th>
                                <th className='w-2/3 bg-emerald-300'>13 december 2022</th>
                            </tr>
                            <tr>
                                <th>วันที่เสร็จ</th>
                                <th className='w-2/3'>13 december 2022</th>
                            </tr>
                            <tr>
                                <th>ชื่อผู้รับเหมาผูกเสาเข็ม</th>
                                <th className='w-2/3'>13 december 2022</th>
                            </tr>
                            <tr>
                                <th>sheet No.</th>
                                <th className='w-2/3'>13 december 2022</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Step1