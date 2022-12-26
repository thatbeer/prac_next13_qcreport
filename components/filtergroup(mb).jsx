import { useState , useEffect } from "react";
import { MagnifyingGlassCircleIcon , ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
// import {  ListBox, Transition } from "@headlessui/react";
// import { Listbox } from "@headlessui/react";



const tags = [
    'First',
    'Second',
    'Third',
    'Forth'
]


function FiltergroupMB(props) {
    const [selectTag , setSetlectTag] = useState(tags[0])
    const [query,setQuery] = useState("")
    const [searching , setSearching] = useState("");

    const filteredTag = query === '' ? tags : tags.filter((tag) => {
        return tag.toLowerCase().includes(query.toLowerCase())
    })

  return (
     <>
         <div className="container relative mx-auto my-8 w-full
                items-center justify-center">
               {/* search container */}
               <div className="flex mx-auto mb-2 ">
                  <input type='search' value={searching} onChange={(event) => setSearching(event.target.value)}
                     className="w-full px-4 py-2 text-gray-700 bg-white 
                        border rounded-md focus:border-blue-900 
                        focus:ring-blue-800 focus:outline-none focus:ring 
                        focus:ring-opacity-30 jusitfy-center"
                     placeholder="searching..."
                  />
                  <button className="mx-1 px-2 py-2 border text-white bg-sky-600 rounded-full ">
                     <MagnifyingGlassCircleIcon class="w-6 h-6"/>
                  </button>
               </div>
               
               {/* <div className="container mx-auto">
                  <Listbox as="div" value={selectTag} onChange={setSetlectTag}>
                     {({open}) => (
                        <>
                           <ListBox.label className="text-sm font-medium text-gray-700">Favorite tags</ListBox.label>
                           <div className="relative">
                              <span className="inline-block w-full">
                                 <ListBox.Button className="pl-3 py-2 w-full text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 relative border shadow-sm border-gray-300 rounded text-gray-800">
                                    <span className="block truncate">{selectTag}</span>
                                 </ListBox.Button>
                              </span>
                              <Transition show={open}
                                 leave="transition ease-in duration-100"
                                 leaveFrom="opacity-100"
                                 leaveTo="opacity-0"   
                              >
                                 <ListBox.Options static className="border border-gray-300 rounded mt-1">
                                    {tags.map((tag) => (
                                       <ListBox.Options key={tags} value={tags}>
                                          {({selected , active }) => (
                                             <div className={`${active ? "text-white bg-indigo-500" : "text-gray-900"} cursor-default
                                                      select-none realtive py-2 pl-10 pr-4`}
                                             >
                                                <span className={`${selected ? "font-semibold" : "font-normal"}`}>{fruit}</span>
                                                {selected &&  (
                                                   <span className={`${active ? "text-white" : "text-indigo-600"}
                                                      absoulte inset-y-0 left-0 flex items-center pl-2`}>
                                                      <ChevronDoubleDownIcon class="h-5 w-5"/>
                                                   </span>
                                                )}
                                             </div>
                                          )}
                                       </ListBox.Options>
                                    ))}
                                 </ListBox.Options>
                              </Transition>
                           </div>
                        </>
                     )}
                  </Listbox>
               </div> */}



               {/* filter button */}
               {/* <div className="mx-auto my-6 w-2/3">
                  <div className="flex flex-wrap w-full">
                     <button className="btn btn-danger  my-4 w-full">Filter!</button>
                     <button className="btn btn-danger  my-4 w-full">Filter!</button>
                     <button className="btn btn-danger  my-4 w-full">Filter!</button>
                     <button className="btn btn-danger  my-4 w-full">Filter!</button>
                  </div>
               </div> */}
               
         </div>
     </>
  )
}

export default FiltergroupMB









