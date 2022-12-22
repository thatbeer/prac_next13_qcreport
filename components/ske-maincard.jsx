import React from 'react'

function Skemaincard() {
  return (
    <div className="w-4/5 lg:w-[800px] h-[150px] border-2 rounded-md mx-auto mt-20">
        <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
            {/* <div className="w-12 bg-gray-300 h-12 rounded-full ">
            </div> */}
                <div className="flex flex-col space-y-3 w-4/5 ">
                <div className="block w-full bg-gray-300 h-6 rounded-md ">
                </div>
                <div className="w-4/5  bg-gray-300 h-6 rounded-md ">
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skemaincard