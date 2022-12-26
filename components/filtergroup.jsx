import { useState , useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

function Filtergroup(props) {
   const [searching , setSearching] = useState("");


  return (
     <>
         <div className="mx-auto my-0 h-auto w-auto
               flex flex-col items-center justify-center">
               {/* search container */}
               <div className="flex ml-2 ">
                  <input type='search' value={searching} onChange={(event) => setSearching(event.target.value)}
                     className="block w-full px-4 py-2 text-gray-700 bg-white 
                        border rounded-md focus:border-blue-900 
                        focus:ring-blue-800 focus:outline-none focus:ring 
                        focus:ring-opacity-30 "
                     placeholder="searching..."
                  />
                  <button className="mx-1 px-2 py-2 border text-white bg-sky-600 rounded-full ">
                     <MagnifyingGlassCircleIcon class="w-6 h-6"/>
                  </button>
               </div>

               {/* filter button */}
               <div className="mx-auto my-6 w-2/3">
                  <div className="flex flex-wrap md:flex-col w-full">
                     <button className="btn btn-danger  my-4 w-full">Filter!</button>
                     <button className="btn btn-danger  my-4 w-full">Filter!</button>
                     <button className="btn btn-danger  my-4 w-full">Filter!</button>
                     <button className="btn btn-danger  my-4 w-full">Filter!</button>
                  </div>
               </div>
               
         </div>
     </>
  )
}

export default Filtergroup




























// export default function FilterGroup() {
//     const [plan , setPlan] = useState('default')

//     useEffect(() => {
        
//         console.log(plan)
//     }, []);
//     return (
//         <>
//              <RadioGroup value={plan} onChange={setPlan}>
//                 <RadioGroup.Label>Plan</RadioGroup.Label>
//                 <RadioGroup.Option value="startup">
//                     {({ checked }) => (
//                     <span className={checked ? 'bg-blue-200' : ''}>Startup</span>
//                     )}
//                 </RadioGroup.Option>
//                 <RadioGroup.Option value="business">
//                     {({ checked }) => (
//                     <span className={checked ? 'bg-blue-200' : ''}>Business</span>
//                     )}
//                 </RadioGroup.Option>
//                 <RadioGroup.Option value="enterprise">
//                     {({ checked }) => (
//                     <span className={checked ? 'bg-blue-200' : ''}>Enterprise</span>
//                     )}
//                 </RadioGroup.Option>
//             </RadioGroup>
//         </>
//     )
// }