import React from 'react'
import CheckTab from './checktab'

const Step4 = () => {
  return (
    <>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-bold'>4. ทดสอบของเหลว</h1>

            <div className='mx-auto w-full relative my-2'>
            <div className=' block '>
            <div className='py-2 border border-gray-600 rounded-t  flex items-center
            justify-center font-bold text-xl bg-blue-200'>
                <h1>ข้อมูลการทดสอบของเหลว</h1>
            </div>
            <table className='w-full'>
                <tbody className=' '>
                <tr className=' flex border border-x border-gray-600 items-center text-start justify-between '>
                    <th className='p-2 w-1/3 border-r bg-green-200 border-gray-600'>ประเภทสารละลาย</th>
                    <td className='p-2 w-2/3 text-start '>โพลิเมอร์</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>

            <CheckTab/>

            <div className='overflow-x-auto my-2 '>  
            <table className=" w-full">
                <thead className='bg-blue-200 rounded'>
                    <tr>
                        <th className='p-5 text-sm  text-start border border-gray-700 '>โครง</th>
                        <th className='p-5 text-sm  text-center border border-gray-700 '>
                          <div className='flex flex-col'>
                            <div className='border-b my-auto py-1'>pH</div>
                            <div>
                              <pre className='border-b border-dashed border-gray-600'>ที่วัดได้</pre>มาตราฐาน
                            </div>
                          </div>
                        </th>
                        <th className='p-5 text-sm  text-center border border-gray-700 '>
                          <div className='flex flex-col'>
                            <div className='border-b my-auto py-1'>Density<pre>(ก./มล.)</pre></div>
                            <div>
                              <pre className='border-b border-dashed border-gray-600'>ที่วัดได้</pre>มาตราฐาน
                            </div>
                          </div>
                        </th>
                        <th className='p-5 text-sm  text-center border border-gray-700 '>
                          <div className='flex flex-col'>
                            <div className='border-b my-auto py-1'>Viscostiy<pre>(วินาที)</pre></div>
                            <div>
                              <pre className='border-b border-dashed border-gray-600'>ที่วัดได้</pre>มาตราฐาน
                            </div>
                          </div>
                        </th>
                        <th className='p-5 text-sm  text-center border border-gray-700 '>
                          <div className='flex flex-col'>
                            <div className='border-b my-auto py-1'>% Sand</div>
                            <div>
                              <pre className='border-b border-dashed border-gray-600'>ที่วัดได้</pre>มาตราฐาน
                            </div>
                          </div>
                        </th>
                        <th className='p-5 text-sm  text-center border border-gray-700 '>วันและเวลา</th>
                        <th className='p-4 text-sm text-start border border-gray-700 '>ผู้ทดสอบ</th>
                        
                    </tr>
                </thead>
                <tbody className=' '>   
                        <tr  className="text-start border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-gray-700'>1.สารละลายก่อนเจาะ</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>8.0</pre>{"[8.0 - 10.0]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>1.02</pre>{"[<= 1.02]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>65</pre>{"[>= 55]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>0.00</pre>{"[<=0.30]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-gray-700'><pre>26 ธ.ค. 2565 (08:48)</pre>26 ธ.ค. 2565 (08:48)</td>
                            <td className='w-1/7 text-start p-4 mx-auto my-1 text-sm  border-x border-gray-700'><pre>เบส-กุศล</pre> อยู่เป็นสุข</td>
                        </tr>
                        <tr  className="text-start border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-gray-700'>1.สารละลายก่อนเจาะ</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>8.0</pre>{"[8.0 - 10.0]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>1.02</pre>{"[<= 1.02]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>65</pre>{"[>= 55]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>0.00</pre>{"[<=0.30]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-gray-700'><pre>26 ธ.ค. 2565 (08:48)</pre>26 ธ.ค. 2565 (08:48)</td>
                            <td className='w-1/7 text-start p-4 mx-auto my-1 text-sm  border-x border-gray-700'><pre>เบส-กุศล</pre> อยู่เป็นสุข</td>
                        </tr>
                        <tr  className="text-start border-y border-gray-700 rounded-t  my-auto items-center justify-center">
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-gray-700'>1.สารละลายก่อนเจาะ</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>8.0</pre>{"[8.0 - 10.0]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>1.02</pre>{"[<= 1.02]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>65</pre>{"[>= 55]"}</td>
                            <td className=' text-center text-white p-4 mx-auto my-1 text-sm  border-r border-gray-700 ' style={{backgroundColor : 'green'}}><pre className='border-b border-dashed border-gray-700'>0.00</pre>{"[<=0.30]"}</td>
                            <td className=' text-center p-4 mx-auto my-1 text-sm  border-x border-gray-700'><pre>26 ธ.ค. 2565 (08:48)</pre>26 ธ.ค. 2565 (08:48)</td>
                            <td className='w-1/7 text-start p-4 mx-auto my-1 text-sm  border-x border-gray-700'><pre>เบส-กุศล</pre> อยู่เป็นสุข</td>
                        </tr>
                        
                </tbody>
            </table>
        </div>









        </div>
    </>
  )
}

export default Step4