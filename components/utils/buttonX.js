import React from 'react'

const ButtonX = ({ children , className , ...props}) => {
  return (
    <>
        <button
            type="button"
            className={classNames(
                "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",className)} {...props}>
            {children}
        </button>
    </>
  )
}

export default ButtonX