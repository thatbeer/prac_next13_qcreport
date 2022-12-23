import React from 'react'

function Progressbar(props) {
  return (
    <>
        <div className='container mx-auto p-1 pt-1 pb-4 
        flex flex-col items-center'>
            <div className='w-full my-2 h-[120px] bg-gray-100 rounded-lg border border-offset-3 border-gray-600'>

                <div className='title my-2 rounded flex flex-start justify-start justify-center '>
                    <h1 className='font-bold text-xl text-blue-900'>ProgressBar</h1>
                </div>
                <div className=" bg-gray-200 h-5 rounded-2xl my-2 flex 
                flex-inline justify-center items-center mx-auto" style={{width: "95%"}} >
                    <div className="bg-red-400 h-5  flex flex-start items-center justify-center 
                        text-xs font-semibold text-white rounded-2xl" 
                        style={{width: "75%"}}
                    >
                        75%
                        {/* <span className='bg-primary relative -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white'>
                            <span 
                                className='bg-gray-400 relative bottom-2 z-40 h-4 w-4 text-xs rounded-sm'
                            >
                                50%
                            </span>
                        </span> */}
                    </div>
                    
                </div>
                <span className='flex flex-inline justify-center items-center mx-auto'>เหลือ 0/100</span>
            </div>
        </div>
    </>
  )
}

export default Progressbar