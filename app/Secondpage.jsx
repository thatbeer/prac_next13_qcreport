import Stickytitle from '../components/stickytitle';
import Progressbar from '../components/progressbar'
import TableContent from "../components/tablecotent";
import FilterGroup from '../components/filtergroup';
import { StepBarTitle , StepBarUse} from '../components/StepBar';
import Statcard from '../components/Statcard'

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
             md:flex-row flex-grow overflow-auto h-screen mb-[100px] pb-[100px]">


                <div className="hidden md:flex w-1/4 flex-shrink flex-grow-0 p-4 bg-sky-200">
                    <div className="sticky top-0 p-4 w-full mx-auto border border-dashed border-black">
                        <ul className="flex flex-col overflow-hidden content-center justify-between">
                            <li className='bg-red-200'>sdsdsd</li>
                            <FilterGroup />
                        </ul>
                    </div>
                </div>

                <div className='flex mx-auto items-center justify-center'>
                    <main role="main" className="w-full h-full flex-grow p-3">
                        <div className='flex flex-col md:flex-row justify-between'>
                            {/* <div className="w-full md:w-2/5">
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