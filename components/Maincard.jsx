import Dropdownlist from './Dropdownlist'
import {PaperAirplane} from '@heroicons/react/24/outline'
import papericon from './papericon';

const Maincard = (props) => {
    return (
        <>
            <div className="block p-4 my-2 border border-gray-300 rounded-lg w-4/5 md:w-[800px]
                            shadow-none hover:shadow-sm bg-zinc-100 hover:bg-gray-200">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-whte truncate ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h5>
                    <p className="text-gray-700 dark:text-gray-400 truncate overflow-auto my-2">
                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”

                        As Cicero would put it, “Um, not so fast.”

                    </p>
                    
                    <div className="flex flex-inline items-center justify-between my-2">
                        <div className="flex flex-row-2 gap-6 mr-auto">
                            <p className='flex flex-inline mx-2'>1 {"  "}
                                <svg class="w-6 h-6 text-red-500 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                            </p >
                            <p className='flex flex-inline mx-2'>
                                2
                                <svg class="w-6 h-6 text-amber-500 mx-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </p>
                        </div>


                        <Dropdownlist />
                        
                    </div>
            </div>
        </>
    )
};

export default Maincard;