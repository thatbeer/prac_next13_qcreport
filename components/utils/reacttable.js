import { useTable } from 'react-table';

import React , {useMemo} from 'react'


// Dynamic Table by React-Table
// https://react-table-v7.tanstack.com/docs/quick-start


function TestTable({data,columns}) {
    // const data = useMemo(
    //     () => [
    //         {
    //             col1:"hello",
    //             col2:"word"
    //         },
    //         {
    //             col1:"react",
    //             col2:"table"
    //         },
    //         {
    //             col1:"hello",
    //             col2:"word"
    //         },

    //     ],
    //     []
    // )

    // const columns = useMemo(
    //     () => [
    //         {
    //             Header:"Column 1",
    //             accessor:"col1"
    //         },
    //         {
    //             Header:"Column 2",
    //             accessor:"col2"
    //         },
    //     ],
    //     []
    // )
    
    const {
        getTableProps ,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns , data})




  return (
    <table className='' 
        {...getTableProps()}
        // style={{border : 'solid 1px blue'}}
    >
        <thead className='relative'>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th 
                            className='border text-start p-2'
                            {...column.getHeaderProps()}
                            // style={{ borderBottom : 'solid 3px red',
                            //         background: 'aliceblue',
                            //     color : 'black',
                            //     fontWeight: 'bold',
                            // }}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()} className="text-start">
           { rows.map(row => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}
                    className=''
                >
                    {row.cells.map(cell => {
                        return (
                            <td className="border my-2 p-2"
                                {...cell.getCellProps()}
                                // style={{
                                //     padding: '10px',
                                //     border: 'solid 1px gray',
                                //     background: 'papayawhip',
                                // }}
                            >
                                {cell.render('Cell')}
                            </td>
                        )
                    })}
                </tr>
            )
           })}
        </tbody>
    </table>
  )
}

export default TestTable