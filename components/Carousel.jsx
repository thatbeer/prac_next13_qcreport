import React from 'react'

function Carousel() {
  return (
    <>  
    <div className='mx-auto  w-3/4  my-4'>
        <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full lg:h-[400px] h-[200px]">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div> 
            <div id="item2" className="carousel-item w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div> 
            <div id="item3" className="carousel-item w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div> 
            <div id="item4" className="carousel-item w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
        </div> 
        <div className="flex justify-between w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">Left</a>
            <div className='flex justify-center w-full mx-auto'>
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>

            </div>
            <a href={"#item1" }className="btn btn-xs abolute">Right</a>
        </div>
                
        
    </div>
    </>
  )
}

export default Carousel