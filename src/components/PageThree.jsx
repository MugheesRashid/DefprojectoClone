import React from 'react'

function PageThree() {
  return (
    <div className="page-3 w-screen relative h-[100vh]">
    <div className="flexible w-full bg-[rgb(33,33,33)] h-full rounded-tr-[35%] flex flex-row justify-center items-center px-10">
      <div style={{ wordSpacing: "5px" }} className="text-box relative w-[55%] h-[60vh] tracking-tighter mr-7 text-[rgb(255,251,242)] text-5xl leading-[55px] overflow-auto font-semibold">
        <span className='span-1 bg-transparent w-full h-[5vh] block'></span>
        <span className='w-full jugar absolute h-[120vh] z-[99] bg-[rgb(33,33,33)] opacity-0'></span>
      Deep immersion in challenges and the combination of expertise are the starting point for creating clear concepts, real impact and consistent results. We collaborate with those who generate value in a broad and deep way, forming long-term partnerships, high-impact and high-yield businesses, and places that improve our future.
      </div>
      <div style={{ background: "linear-gradient(to bottom, rgba(33, 33, 33, 1), rgba(33, 33, 33, 0))" }} className="w-[53%] h-[10%] absolute top-[20vh] left-0 ml-[8vw]"></div>
      <div style={{ background: "linear-gradient(to top, rgba(33, 33, 33, 1), rgba(33, 33, 33, 0.5), rgba(33, 33, 33, 0))" }} className="w-[50%] h-[15%] absolute bottom-[20vh] left-0 ml-[8vw]"></div>
      <div className="h-[65vh] w-[65vh] bg-[#FFFBF2] circle rounded-full z-[999]"></div>
    </div>

  </div>
  )
}

export default PageThree
