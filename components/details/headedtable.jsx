import React , { useState , useMemo } from 'react'
// soruce code: 
// https://codesandbox.io/s/strange-chatterjee-z39br?file=/src/App.js:212-2599
// an example of empolyee table which is a dynamic responsive table simulated by
// static file for fake fetching data and also the use of useMemo


const HeadedTable = ({header,datas}) => {
    

  return (
    <>
        <div className='overflow-x-auto my-2'>  
            <table className=" w-full">
                <thead className='bg-blue-200 '>
                    <tr>
                        {header?.map((head,idx) => (
                            <th key={idx} className='p-5 text-sm tracking-wide text-center border border-gray-700 '>{idx}{head.Header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className=' '>
                    { datas?.map((data,idx) => (
                        <tr key={idx} className="text-center border-y border-gray-700  my-auto">
                            <td className='p-4 mx-auto my-1 text-sm  border-x border-gray-700  '>{data.NO}</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>{data.Detail}</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700  '>{data.Status}</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700   '>{data.DATE}</td>
                            <td className='p-4 mx-auto my-1 text-sm  border-r border-gray-700 '>{data.TOTAL}</td>
                        </tr>
                    ))}
        

                </tbody>
            </table>
        </div>
    </>
  )
}

export default HeadedTable