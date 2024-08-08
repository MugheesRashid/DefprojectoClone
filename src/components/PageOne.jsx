import React from 'react'
import Navbar from "./navbar"

export default function PageOne() {
  return (
      <div className="page1 h-screen relative bg-[#fcf9f1fc]">
          <Navbar ></Navbar>
          <div className="w-[61.5vh] h-[61.5vh] absolute rounded-full bg-[url('https://www.defprojetos.com/images/uploads/posts/mobile/cidade-center-norte05_1702250970.webp')] bg-cover bg-center bg-no-repeat top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-[2]">
          <div className="text-[9rem] left-[-460px] whitespace-nowrap top-[7.3vh] tracking-tighter overflow-hidden absolute z-10 w-screen">
            <div className="inline-block slide px-4">
              <p className='inline-block text-white font-semibold px-4'>URBANISM + ARCHITECTURE</p>
              <p className='inline-block text-white font-semibold px-4'>URBANISM + ARCHITECTURE</p>
            </div>
            <div className="inline-block slide px-4">
              <p className='inline-block text-white font-semibold px-4'>URBANISM + ARCHITECTURE</p>
              <p className='inline-block text-white font-semibold px-4'>URBANISM + ARCHITECTURE</p>
            </div>
            <div className="inline-block slide px-4">
              <p className='inline-block text-white font-semibold px-4'>URBANISM + ARCHITECTURE</p>
              <p className='inline-block text-white font-semibold px-4'>URBANISM + ARCHITECTURE</p>
            </div>
          </div>
          </div>
          <div className="text-[9rem] whitespace-nowrap top-[16vh] tracking-tighter overflow-hidden relative z-[1] w-screen">
            <div className="inline-block slide px-4">
              <p className='inline-block text px-4'>URBANISM + ARCHITECTURE</p>
              <p className='inline-block text px-4'>URBANISM + ARCHITECTURE</p>
            </div>
            <div className="inline-block slide px-4">
              <p className='inline-block text px-4'>URBANISM + ARCHITECTURE</p>
              <p className='inline-block text px-4'>URBANISM + ARCHITECTURE</p>
            </div>
            <div className="inline-block slide px-4">
              <p className='inline-block text px-4'>URBANISM + ARCHITECTURE</p>
              <p className='inline-block text px-4'>URBANISM + ARCHITECTURE</p>
            </div>
          </div>

          <p className='absolute number block top-[62vh] w-[26vw] text-[rgb(33,33,33)] right-[8vw] leading-[18px] tracking-tighter font-medium text-[17px]'>
            From urban planning to architecture, we work
            with creativity and pragmatism, focusing on building strategic, unique and viable solutions that generate value in a broad and profound way.
          </p>
          <div className="w-screen number top-[43%] relative font-[670] text-[rgb(33,33,33)] leading-[14px] bg-transparent uppercase text-[12px] h-5 flex flex-row justify-between items-center px-10">
            <p>contato@defprojetos.com</p>
            <div className='flex flex-row w-1/3 justify-between items-center'>
              <p className='number'>RJ +55 21 2541 6687</p>
              <p className='number'>SP +55 11 3544 3000</p>
            </div>
          </div>
        </div>
  )
}
