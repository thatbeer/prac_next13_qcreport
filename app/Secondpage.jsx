import Stickytitle from '../components/stickytitle';
import Progressbar from '../components/progressbar'
import TableContent from "../components/tablecotent";
import Filtergroup from '../components/filtergroup';
import FiltergroupMB from '../components/filtergroup(mb)'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';


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
            <div className="w-full flex flex-col flex-grow h-screen ">

                {/* Search Container as SIDE BAR */}
                {/* <div className="hidden lg:flex fixed w-1/4 flex-shrink 
                flex-grow-0 p-4 bg-sky-200 h-full z-20">
                    <div className=" top-0 p-1 w-full mx-auto border border-dashed border-black">
                        <ul className="flex flex-col content-center justify-between">
                         
                            <div className='mx-auto bg-red-200'>
                                <Filtergroup />
                            </div>
                        </ul>
                    </div>
                </div> */}

                {/* Search Container as TOP BAR (for mobile) */}


                {/* <div className='flex lg:hidden flex-col flex-shrink 
                    flex-grow-0 w-screen mx-auto'
                >
                    <div className=''>
                        <div className='items-center justify-center px-4'>
                            <FiltergroupMB loc='mobile'/>
                            <div>
                                <Listbox />
                            </div>
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
                </div> */}

                <div className='fixed top-[55px] w-full items-center mx-auto bg-green-200 h-[50px] z-30 '>
                    <div className='flex flex-col lg:flex-row mx-auto items-center py-1 bg-red-200'>
                        {/* <div className='justify-start flex lg:hidden '>
                            <button className='mx-auto btn btn-warning'>filter1</button>
                          
                        </div> */}
                        <div className=' w-1/3 justify-center hidden lg:flex mx-auto '>
                            <button className='mx-10 bg-gray-200 border border-gray-400 py-4 px-6 rounded-lg'>filter1</button>
                            <button className='mx-10 bg-gray-200 border border-gray-400 py-4 px-6 rounded-lg'>filter2</button>
                            <button className='mx-10 bg-gray-200 border border-gray-400 py-4 px-6 rounded-lg'>filter3</button>
                            <button className='mx-10 bg-gray-200 border border-gray-400 py-4 px-6 rounded-lg'>filter4</button>

                        </div>
                        {/* search bar section */}
                        <div className='relative flex  text-gray-700 mx-auto lg:mx-2'>
                            <input type={'search'} name="search" placeholder='search'
                                className='border-2 lg:w-full  border-gray-300 bg-white h-8  px-1 rounded-lg text-sm focus:outline-none'/>
                            <button type='submit' className='relative '>
                                <MagnifyingGlassCircleIcon onClick={() => console.log('click search')} className='w-8 h-8 ml-1 hover:text-white' />
                            </button>
                        </div>

                        <div className=' justify-between flex lg:hidden mx-auto my-1 '>
                            <button className='mx-1 bg-gray-200 border border-gray-400 py-2 px-4 rounded-lg'>filter1</button>
                            <button className='mx-1 bg-gray-200 border border-gray-400 py-2 px-4 rounded-lg'>filter2</button>
                            <button className='mx-1 bg-gray-200 border border-gray-400 py-2 px-4 rounded-lg'>filter3</button>
                            <button className='mx-1 bg-gray-200 border border-gray-400 py-2 px-4 rounded-lg'>filter4</button>

                        </div>


                    </div>
                </div>
                {/* <div className='fixed top-4 w-screen items-center mx-auto bg-green-200 h-[200px] px-2 py-3 z-30 '>
                    
                </div> */}


                <div className='flex flex-1 mx-auto mt-4 lg:mt-0'>
                    <main role="main" className="lg:w-full w-screen h-full flex-grow px-2 ">
                        <div className='flex flex-col lg:flex-row justify-between pt-[64px] mx-auto'>
                            
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