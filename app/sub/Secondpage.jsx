'use client'

import Stickytitle from '../components/stickytitle';
import Progressbar from '../components/progressbar'
import TableContent from "../components/tablecotent";
import Filtergroup from '../components/filtergroup';
import FiltergroupMB from '../components/filtergroup(mb)'




const Secondpage = () => {
    const products = [
        {
            id: "1",
            date:'11/12/22'
        },
        {
            id: "2",
            date:'11/12/22'
        },
        {
            id: "3",
            date:'11/12/22'
        },
    ]
    return (
        <>
            <div className="w-full flex flex-col
             lg:flex-row flex-grow h-screen pt-[64px] ">

                {/* Search Container as SIDE BAR */}
                <div className="hidden lg:flex fixed w-1/4 flex-shrink 
                flex-grow-0 p-4 bg-sky-200 h-full z-20">
                    <div className=" top-0 p-1 w-full mx-auto border border-dashed border-black">
                        <ul className="flex flex-col content-center justify-between">
                            {/* <li className='bg-red-200'>sdsdsd</li> */}
                            <li>
                                <Filtergroup />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Search Container as TOP BAR (for mobile) */}


                <div className='flex lg:hidden flex-col flex-shrink 
                    flex-grow-0 w-screen mx-auto'
                >
                    <div className=' bg--700'>
                        <div className='items-center justify-center px-4'>
                            <FiltergroupMB loc='mobile'/>
                            {/* <div>
                                <Listbox />
                            </div> */}
                            <div className='mx-auto'>
                                <ul className='w-full flex items-center justify-center'>
                                    <li className="flex ">
                                        <button className='btn btn-primary mx-2'>First</button>
                                        <button className='btn btn-primary mx-2'>First</button>
                                        <button className='btn btn-primary mx-2'>First</button>
                                        <button className='btn btn-primary mx-2'>First</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='flex mx-auto lg:pl-[20rem]
                 items-center justify-center'>
                    <main role="main" className="lg:w-full w-screen h-full flex-grow p-3">
                        <div className='flex flex-col lg:flex-row justify-between'>
                            {/* <div className="w-full lg:w-2/5">
                            <Statcard/>

                            </div> */}
                            <div className='w-full '>
                                <Progressbar/>

                            </div>
                        </div>
                            <div className='w-full '> 

                                <TableContent/>
                            </div>
                        
                        
                        
                    </main>
                </div>
            </div>
            <Stickytitle/>
        </>
    )
};

export default Secondpage;