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
    }
]

function Mainpage() {
  return (
    <>
        <main className="mx-auto max-w-full py-6 sm:py-6" >
            <div className="px-4 py-6 sm:px-0">
                <div className="h rounded-lg border-4 border-dashed border-gray-600 mx-auto">
                    <div className="flex flex-col items-center justify-center mx-auto my-2">
                        {demo.map((item) => (
                            <Maincard key={item.item} />
                        ))}
                    
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Mainpage