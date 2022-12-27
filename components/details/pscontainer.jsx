import React from 'react'


export const PsContainer = (props) => {
  return (
    <>
        <div className='relative mt-2'>
            <div className='mx-1'>
                <h1 className='text-lg '>{props.title}</h1>
                <li>{props.text}</li>
            </div>
        </div>
    </>
  )
}

// const PsContainer = (props) => {
//   return (
//     <>
//         <div className='relative mt-2'>
//             <div className='mx-1'>
//               { props.datas.map((data) => {
//                 <div >
//                   <h1 className='text-lg bg-red-200'>{data.title}</h1>
//                   { data.tags.map((tag,idx) => (
                  
//                     <li key={idx}>1213213{tag.note}</li>
//                   ))}
//                 </div>
//               })}
//             </div>
//         </div>
//     </>
//   )
// }
export default PsContainer;