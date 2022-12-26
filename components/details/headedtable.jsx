import React , { useState , useMemo } from 'react'
// soruce code: 
// https://codesandbox.io/s/strange-chatterjee-z39br?file=/src/App.js:212-2599
// an example of empolyee table which is a dynamic responsive table simulated by
// static file for fake fetching data and also the use of useMemo
// const headers = [
//     {
//         Header: "Name",
//         accessor: "name"
//     },
//     {
//         Header: "Title",
//         accessor: "title"
//     },
//     {
//         Header: "Locate",
//         accessor: "locate",
//         Cell: 'LocateCell',
//         posAccessor: "posCoords"
//     },
//     {
//         Header: "Status",
//         accessor: "status",
//         Cell: 'StatusPill'
//     },
//     {
//         Header: "Locate",
//         accessor: "locate",
//         Filter: 'SelectColumFilter',
//         filter: "includes"
//     }
// ]

// const header = [
//     {
//         Header: "No."
//     },
//     {
//         Header: "Detail"
//     },
//     {
//         Header: "Status"
//     },
//     {
//         Header: "Date"
//     },
//     {
//         Header: "Total"
//     }
// ]

// const fakeData = [
//     {
//         NO : '1',
//         Detail:'Red',
//         Status : "Quality Control",
//         DATE : "12/02/22",
//         TOTAL : 4
//     },
//     {
//         NO : '2',
//         Detail:'Red',
//         Status : "Quality Control",
//         DATE : "12/02/22",
//         TOTAL : 4
//     },
//     {
//         NO : '3',
//         Detail:'Green',
//         Status : "Quality Control",
//         DATE : "12/02/22",
//         TOTAL : 4
//     }
// ]


// const getData = () => [
//     {
//       name: "Jane Cooper",
//       email: "jane.cooper@example.com",
//       title: "Regional Paradigm Technician",
//       department: "Optimization",
//       status: "Active",
//       role: "Admin",
//       locate: "Locate1",
//       posCoords: [260, 900],
//       imgUrl:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
//     },
//     {
//       name: "Cody Fisher",
//       email: "cody.fisher@example.com",
//       title: "Product Directives Officer",
//       department: "Intranet",
//       status: "Active",
//       role: "Owner",
//       locate: "Locate",
//       imgUrl:
//         "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
//     },
//     {
//       name: "Esther Howard",
//       email: "esther.howard@example.com",
//       title: "Forward Response Developer",
//       department: "Directives",
//       status: "Active",
//       role: "Member",
//       locate: "Locate",
//       imgUrl:
//         "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
//     },
//     {
//       name: "Jenny Wilson",
//       email: "jenny.wilson@example.com",
//       title: "Central Security Manager",
//       department: "Program",
//       status: "Active",
//       role: "Member",
//       locate: "Locate",
//       imgUrl:
//         "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
//     },
//     {
//       name: "Kristin Watson",
//       email: "kristin.watson@example.com",
//       title: "Lean Implementation Liaison",
//       department: "Mobility",
//       status: "Active",
//       role: "Admin",
//       locate: "Locate",
//       imgUrl:
//         "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
//     },
//     {
//       name: "Cameron Williamson",
//       email: "cameron.williamson@example.com",
//       title: "Internal Applications Engineer",
//       department: "Security",
//       status: "Active",
//       role: "Member",
//       locate: "Locate",
//       posCoords: [260, 900],
//       imgUrl:
//         "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
//     }
// ];


const HeadedTable = ({header,datas}) => {
    // const columns = React.useMemo(
    //     () => [
    //         headers, []
    //     ]
    // )
    // const data = React.useMemo( () => getData , []);

  return (
    <>
        <div className='overflow-x-auto relative border border-gray-800 rounded-lg my-2'>  
            <table className="table w-full">
                <thead className='bg-gray-100 border-b border-gray-800'>
                    <tr>
                        {header?.map((head,idx) => (
                            <th key={idx} className='p-5 text-sm tracking-wide text-center '>{idx}{head.Header}</th>
                        ) )}
                        {/* <th className='p-5 text-sm tracking-wide text-left '>No.</th>
                        <th className='p-5 text-sm tracking-wide text-left '>Detail</th>
                        <th className='p-5 text-sm tracking-wide text-left '>Status</th>
                        <th className='p-5 text-sm tracking-wide text-left '>Date</th>
                        <th className='p-5 text-sm tracking-wide text-left'>Total</th> */}
                    </tr>
                </thead>
                <tbody className='bh-red-100 '>
                    { datas?.map((data,idx) => (
                        <tr key={idx} className="text-center">
                            <td className='p-5 text-sm text-gray-700'>{data.NO}</td>
                            <td className='p-5 text-sm text-gray-700'>{data.Detail}</td>
                            <td className='p-5 text-sm text-gray-700'>{data.Status}</td>
                            <td className='p-5 text-sm text-gray-700'>{data.DATE}</td>
                            <td className='p-5 text-sm text-gray-700'>{data.TOTAL}</td>
                        </tr>
                    ))}
        
                    {/* <tr>
                        <td className='p-5 text-sm text-gray-700 '>1</td>
                        <td className='p-5 text-sm text-gray-700 '>Cy Ganderton</td>
                        <td className='p-5 text-sm text-gray-700 '>Quality Control Specialist</td >
                        <td className='p-5 text-sm text-gray-700 '>Blue</td>
                        <td className='p-5 text-sm text-gray-700'>Blue</td>
                    </tr>
            
                    <tr>
                        <td className='p-5 text-sm text-gray-700 '>1</td>
                        <td className='p-5 text-sm text-gray-700 '>Cy Ganderton</td>
                        <td className='p-5 text-sm text-gray-700 '>Quality Control Specialist</td >
                        <td className='p-5 text-sm text-gray-700 '>Blue</td>
                        <td className='p-5 text-sm text-gray-700 '>Blue</td>
                    </tr>
                
                    <tr>
                        <td className='p-5 text-sm text-gray-700   border-gray-700'>1</td>
                        <td className='p-5 text-sm text-gray-700   border-gray-700'>Cy Ganderton</td>
                        <td className='p-5 text-sm text-gray-700   border-gray-700'>Quality Control Specialist</td >
                        <td className='p-5 text-sm text-gray-700   border-gray-700'>Blue</td>
                        <td className='p-5 text-sm text-gray-700  '>Blue</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default HeadedTable