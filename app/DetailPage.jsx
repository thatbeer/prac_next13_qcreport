import React from 'react'
import Step1 from '../components/details/step1'
import Statcard from '../components/Statcard';
import HeadedTable from '../components/details/headedtable'
import HeadlessTable from '../components/details/headlesstable'


const header = [
    {
        Header: "No."
    },
    {
        Header: "Detail"
    },
    {
        Header: "Status"
    },
    {
        Header: "Date"
    },
    {
        Header: "Total"
    }
]

const fakeData = [
    {
        NO : '1',
        Detail:'Red',
        Status : "Quality Control",
        DATE : "12/02/22",
        TOTAL : 4
    },
    {
        NO : '2',
        Detail:'Red',
        Status : "Quality Control",
        DATE : "12/02/22",
        TOTAL : 4
    },
    {
        NO : '3',
        Detail:'Green',
        Status : "Quality Control",
        DATE : "12/02/22",
        TOTAL : 4
    },
    {
      NO : '4',
      Detail:'Red',
      Status : "Quality Control",
      DATE : "12/02/22",
      TOTAL : 4
    },
    {
      NO : '5',
      Detail:'Green',
      Status : "Quality Control",
      DATE : "12/02/22",
      TOTAL : 1
    },
]






const DetailPage = () => {
  return (
    <>
        <div className='mx-auto px-4 my-4 flex flex-col w-full md:w-2/3'>
          {/* <Statcard/> */}
          {/* <Step1/> */}
          {/* <HeadedTable datas={fakeData} header={header}/> */}
          <HeadlessTable />
        </div>
    </>
  )
}

export default DetailPage;