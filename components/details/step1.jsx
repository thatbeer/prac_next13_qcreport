import React from 'react'
import Statcard from '../Statcard';
import PsContainer from './pscontainer'
import CheckTab from './checktab'
import text from '../../text'



const Step1 = () => {
    const active = true
    return (
    <>
        <div className='flex flex-col'>
            {/* first container */}
           
        
            <h1 className='text-3xl font-bold'>1. เตรียมโครงเหล็ก</h1>
            
            {/* second contianer */}

            <div className='overflow-x-auto relative border border-gray-800 rounded-lg my-2'>  
            <h1 className='w-full overflow-x-auto tracking-wide text-center border-b border-gray-600 p-2 bg-gray-100 font-bold'>Header</h1>
            <table className="table w-full">
                {/* <thead className='bg-gray-100 border-b border-gray-800 w-full text-center justify-center'>
                    <div>sadsa</div>
                </thead> */}
                <tbody className='border-none rounded-none '>
        
                    <tr>
                        <td className='p-5 text-sm text-gray-700 w-1/4 bg-emerald-200 border-r'>1</td>
                        <td className='p-5 text-sm text-gray-700 w-3/4'>Cy Ganderton</td>
                    </tr>
            
                    <tr>
                        <td className='p-5 text-sm text-gray-700 bg-emerald-200 border-r'>1</td>
                        <td className='p-5 text-sm text-gray-700'>Cy Ganderton</td>
                    </tr>
                
                    <tr>
                        <td className='p-5 text-sm text-gray-700 bg-emerald-200 border-r'>1</td>
                        <td className='p-5 text-sm text-gray-700'>Cy Ganderton</td>
                    </tr>
                    <tr>
                        <td className='p-5 text-sm text-gray-700 bg-emerald-200 border-r border-gray-700'>1</td>
                        <td className='p-5 text-sm text-gray-700 '>Cy Ganderton</td>
                    </tr>
                </tbody>
            </table>
            </div>
            
            

            {/* Table */}
            <div className='overflow-x-auto relative border border-gray-800 rounded-lg my-2'>  
            <table className="table w-full">
                
                <thead className='bg-gray-100 border-b border-gray-800'>
                    <tr>
                        <th className='p-5 text-sm tracking-wide text-left border-r'>No.</th>
                        <th className='p-5 text-sm tracking-wide text-left border-r'>Detail</th>
                        <th className='p-5 text-sm tracking-wide text-left border-r'>Status</th>
                        <th className='p-5 text-sm tracking-wide text-left border-r'>Date</th>
                        <th className='p-5 text-sm tracking-wide text-left'>Total</th>
                    </tr>
                </thead>
                <tbody className='bh-red-100 '>
        
                    <tr>
                        <td className='p-5 text-sm text-gray-700 border-r'>1</td>
                        <td className='p-5 text-sm text-gray-700 border-r'>Cy Ganderton</td>
                        <td className='p-5 text-sm text-gray-700 border-r'>Quality Control Specialist</td >
                        <td className='p-5 text-sm text-gray-700 border-r'>Blue</td>
                        <td className='p-5 text-sm text-gray-700'>Blue</td>
                    </tr>
            
                    <tr>
                        <td className='p-5 text-sm text-gray-700 border-r'>1</td>
                        <td className='p-5 text-sm text-gray-700 border-r'>Cy Ganderton</td>
                        <td className='p-5 text-sm text-gray-700 border-r'>Quality Control Specialist</td >
                        <td className='p-5 text-sm text-gray-700 border-r'>Blue</td>
                        <td className='p-5 text-sm text-gray-700 '>Blue</td>
                    </tr>
                
                    <tr>
                        <td className='p-5 text-sm text-gray-700 border-r  border-gray-700'>1</td>
                        <td className='p-5 text-sm text-gray-700 border-r  border-gray-700'>Cy Ganderton</td>
                        <td className='p-5 text-sm text-gray-700 border-r  border-gray-700'>Quality Control Specialist</td >
                        <td className='p-5 text-sm text-gray-700 border-r  border-gray-700'>Blue</td>
                        <td className='p-5 text-sm text-gray-700 border-r '>Blue</td>
                    </tr>
                </tbody>
            </table>
            </div>
            
            {/* ps tab */}
            <PsContainer title="hello" text="lolen lara bora igna o no" />
            
            {/* green/red tab */}
            <CheckTab note={"xxxx"} />
        </div>
    </>
  )
}

export default Step1