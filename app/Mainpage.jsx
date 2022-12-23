import Maincard from '../components/Maincard';
import Stickytitle from '../components/stickytitle';
import RigProfile from '../components/Rigprofile';

const demo = [
    {
        item: 1
    },
    {
        item: 2
    },
    {
        item: 3
    },
    {
        item: 3
    },
    {
        item: 3
    },
    {
        item: 3
    }
]

function Mainpage() {
  return (
    < > 
        {/* <div className=' mx-auto max-w-screen py-6 my-2 h-[120px] bg-wbbg bg-fixed bg-cover'>

            <div className='mx-5 flex flex-col items-center justify-center my-auto w-auto md:w-3/5 ' >
                <h1 className='text-bold text-6xl text-gray-900 my-2'>QcREPORT</h1>
                <p className='underline text-sm text-gray-600'>welcome to qc report website</p>
            </div>
            <div className='w-full mx-auto'>sdsd</div>
        </div> */}
        {/* <Stickytitle title="xxx"/> */}

        {/* <hr/> */}

        {/* Card components */}
        {/* <div className=' mx-10 my-4 flex flex-wrap items-center justify-center'>
            <div className='w-4/5 flex flex-wrap items-center justify-center'>
                <RigProfile className='mx-2 my-4' />
                <RigProfile className='mx-2 my-4' />
                <RigProfile className='mx-2 my-4' />
                <RigProfile className='mx-2 my-4' />
                <RigProfile className='mx-2 my-4' />
                <RigProfile className='mx-2 my-4' />
            </div>
        </div> */}

        <div className="mx-auto max-w-full py-2 sm:py-2 " >
            <div className="px-4 py-2 sm:px-0">
                <div className=" mx-auto">
                    <div className="flex flex-wrap items-center justify-center mx-auto ">
                        {/* {demo.map((item) => (
                            <Maincard key={item.item} />
                        ))} */}
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                         <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                        <Maincard key={1} />
                       

                    
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Mainpage