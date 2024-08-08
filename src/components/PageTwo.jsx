import React from 'react'

function PageTwo() {
  return (
<div className="page-2 w-screen h-screen relative flex flex-row gap-0 items-center mt-[80vh]">
          <div className="relative w-[60%] top-0 -left-[3vw] h-full text-[rgb(33,33,33)]">
          <h1 className='flex gap-[8vw]'><span className='text-[533px] tracking-tighter left-1/3 font-medium -translate-x-1/3 relative top-0'>1</span><span className='text-[533px] tracking-tighter left-1/3 font-medium -translate-x-1/2 relative top-0'>9</span></h1>
          <h2 className='text-[533px] tracking-tighter left-1/2 font-medium -translate-x-1/2 absolute top-1/2 -translate-y-1/2'>86</h2>
          </div>
          <div className="images w-[382px] bg-black -left-6 relative h-[382px] rounded-md overflow-hidden block object-scale-down">
            <img className='img-1 w-full h-full absolute top-0 left-0 z-[50]' src="https://www.defprojetos.com/images/uploads/posts/desktop/fotodef-4_1710173683.webp" alt="" />
            <img className='img-2 w-full h-full absolute top-0 left-0' src="https://www.defprojetos.com/images/uploads/posts/desktop/reuniao-com-filtro-1_1721854089.webp" alt="" />
          </div>
        </div>
  )
}

export default PageTwo
