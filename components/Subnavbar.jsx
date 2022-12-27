import React from 'react'
import { FolderArrowDownIcon } from '@heroicons/react/24/outline'

const Subnavbar = () => {
  return (
    <>
        <div className='relatvie mx-auto  min-h-[30px] bg-sky-100 border-t border-blue-500'>
            <div className='flex px-6 py-2 justify-center lg:justify-start items-center '>
                <div className='flex flex-1 items-center 
                justify-center sm:justify-start sm:items-stretch'>Project title</div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 
                  sm:static sm:inset-auto sm:ml-6 sm:pr-0 "
              >
                <div>
                Pile NO :{"NO"}
                </div>
                <FolderArrowDownIcon className='hidden lg:flex h-10 w-10 mx-2 pr-2' />
              </div>
                
            </div>
           
        </div>
    </>
  )
}

export default Subnavbar