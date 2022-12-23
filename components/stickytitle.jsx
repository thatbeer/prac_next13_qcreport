import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

const Stickytitle = (props) => {
    return (
        <div className='relative z-50 transition-all truncate' >
            <div className='hidden md:flex md:justify-between fixed bottom-0 left-0 bg-zinc-100 border border-gray-300 h-[60px] max-w-[60px] group-hover:w-auto
                rounded-r-xl rounded-b-none hover:bg-red-200 transition-all duration-500
            hover:w-1/4 hover:visible'>
                <div className='  ml-5 mr-2 p-1 flex  items-center justify-center w-1/4 group-hover:w-full'>
                    <p className="text-bold underline underline-offset-2 truncate">P: Samsen Dusit thanisadsadsadad {props.title? props.title : null}</p>

                </div>
                <button type='button' className="flex items-center justify-center mr-4" onClick={() => (alert("yes, downloading"))} >

                    <ArrowDownOnSquareIcon className="hidden hover:flex h-6 w-6 ml-2 -mt-1" />
                </button>
            </div>
        </div>
    )
};

export default Stickytitle;