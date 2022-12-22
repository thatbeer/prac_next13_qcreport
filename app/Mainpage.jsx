import Maincard from '../components/Maincard';
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
        <div className='mx-auto max-w-screen pt-6    '>
            <div className='mx-5 flex flex-col items-center justify-center' >
                <h2>Title</h2>
                <p>12313123</p>
            </div>
        </div>

        <hr/>

        <div className="mx-auto max-w-full py-4 sm:py-2 " >
            <div className="px-4 py-6 sm:px-0">
                <div className="h rounded-lg border-4 border-dashed border-gray-600 mx-auto">
                    <div className="flex flex-col items-center justify-center mx-auto my-2">
                        {demo.map((item) => (
                            <Maincard key={item.item} />
                        ))}
                    
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Mainpage