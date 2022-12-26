import React from 'react'


const exist = true

const HeadlessTable = () => {
  return (
    <>
        {exist ? (
        <div className='mx-auto border border-dashed w-full relative'>
          <div className='p-2 block bg-sky-100'>
            <div className=' bg-red-200 flex items-center justify-center font-bold text-xl  my-2'>
              <h1>Header</h1>
            </div>
            <div className='divide-x bg-red-200 grid grid-cols-5 justify-center '>
              <p className='mx-auto '>Title</p>
              <p className='mx-auto '>sdsd</p>
              <p className='mx-auto '>sdsd</p>
              <p className='mx-auto '>sdsd</p>
              <p className='mx-auto '>sdsd</p>
            </div>
          </div>
        </div>
          )
          : <h1>None</h1>
        }

    </>
  )
}

export default HeadlessTable