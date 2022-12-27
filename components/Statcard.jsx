import React from 'react'

function Statcard() {
  return (
    <>

        <div className='mx-auto container w-full
            flex flex-col items-center'>
            <div className='flex flex-col h-auto w-full my-2 bg-gray-100 rounded-lg border
             border-offset-3 border-gray-600 divide-y divide-gray-500 '>
                <h1 className='flex items-center justify-center h-2/5 p-4 text-3xl font-bold'>Bore pile</h1>
                <div className='flex flex-row h-full divide-x divide-gray-500'>
                    <div className='flex flex-col w-full items-center justify-start mx-auto my-2'>
                        <h1>Diameter</h1>
                        <p className='text-3xl -mt-1 font-bold'>1.2</p>
                        <p>(m.)</p>
                    </div>
                    <div className='flex flex-col w-full items-center justify-start mx-auto my-2'>
                        <h1>Cutoff</h1>
                        <p className='text-3xl -mt-1 font-bold'>2</p>
                        <p>(m.)</p>
                    </div>
                    <div className='flex flex-col w-full items-center justify-start mx-auto my-2'>
                        <h1>PileTip</h1>
                        <p className='text-3xl -mt-1 font-bold'>56</p>
                        <p>(m.)</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Statcard