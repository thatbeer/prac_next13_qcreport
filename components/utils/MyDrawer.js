

import React from 'react'
import {  Bars3Icon } from '@heroicons/react/24/outline'

function MyDrawer() {



  return (
    <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><Bars3Icon className='h-12 w-12 text-blue-700' /></label>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="absolute menu p-4 w-80 bg-base-100 text-base-content">

            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            
            </ul>
        </div>
    </div>
  )
}

export default MyDrawer