import React from 'react'

const PsContainer = (props) => {
  return (
    <>
        <div className='relative mt-2'>
            <div className='mx-1'>
                <h1 className='text-xl '>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    </>
  )
}

export default PsContainer