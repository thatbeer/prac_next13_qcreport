import React , { useMemo } from 'react'
import Step1 from '../components/details/step1'
import Step2 from '../components/details/step2'
import Step3 from '../components/details/step3'
import Step4 from '../components/details/step4'
import Step5 from '../components/details/step5'
import Step6 from '../components/details/step6'
import Step7 from '../components/details/step7'
import Step8 from '../components/details/step8'
import Step9 from '../components/details/step9'
import Step10 from '../components/details/step10'
import Step11 from '../components/details/step11'


import Subnavbar from '../components/Subnavbar';
import Statcard from '../components/Statcard';
import HeadedTable from '../components/details/headedtable'
import HeadlessTable from '../components/details/headlesstable'
import TestTable from '../components/utils/reacttable'
import NotExistTab from '../components/details/204tab'
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
    const data = useMemo(
        () => [
            {
                col1:"hello",
                col2:"word"
            },
            {
                col1:"react",
                col2:"table"
            },
            {
                col1:"hello",
                col2:"word"
            },

        ],
        []
    )

    const columns = useMemo(
        () => [
            {
                Header:"Column 1",
                accessor:"col1"
            },
            {
                Header:"Column 2",
                accessor:"col2"
            },
        ],
        []
    )
  return (
    <>
        <div className='fixed w-screen z-40 '>
            <Subnavbar />
        </div>
        <div className='mx-auto px-2 lg:my-0 my-2 flex flex-col w-full md:w-2/3 '>
        <div className='pt-[60px] '>

        <Statcard/>
        <Step1/>
        <hr className='my-8 '/>
        <Step2/>
        <hr className='my-8 '/>
        <Step3/>
        <hr className='my-8 '/>
        <Step4/>
        <hr className='my-8 '/>
        <Step5/>
        <hr className='my-8 '/>
        <Step6/>
        <hr className='my-8 '/>
        <Step7/>
        <hr className='my-8 '/>
        <Step8/>
        <hr className='my-8 '/>
        <Step9/>
        <hr className='my-8 '/>
        <Step10/>
        <hr className='my-8 '/>
        <Step11/> 
        </div>


          {/* <HeadedTable datas={fakeData} header={header}/> */}
          {/* <HeadlessTable /> */}
          
          {/* <TestTable data={data} columns={columns} /> */}

          {/* <NotExistTab /> */}
        </div>
    </>
  )
}

export default DetailPage;