import React from 'react'

const CheckTab = (props) => {
    const { active , note} = props
  return (
    <>
        {/* green/red tab */}
        <div className='relative w-auto h-full  rounded-lg my-2'>
            <div className='flex flex-row items-center justify-center w-full h-10 border'>
                <div className='w-1/3 border border-black h-full flex items-center justify-start'>
                    <h1 className=' px-4'>note: {note}</h1>
                </div>
                {/* green/red container */}
                <div className={`w-2/3 ${active ? 'bg-emerald-400' : 'bg-red-400'} border border-l-none border-black h-full rounded-r`}
                // style={`${active ? 'bg-emerald-400' : 'bg-red-400'} class`}
                ></div>
            </div>
        </div>
    </>
  )
}

export default CheckTab