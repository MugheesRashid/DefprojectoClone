import { useEffect, useRef } from 'react';
import './App.css';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Navbar from "./components/navbar"
gsap.registerPlugin(ScrollTrigger)

function App() {
  const customCursor = useRef(null);
  const screen = useRef(null)

  const cursorMove = (dets) => {
    customCursor.current.style.transform = `translate3d(${dets.clientX -
      customCursor.current.clientWidth / 2}px, ${dets.clientY -
      customCursor.current.clientHeight / 2}px, 0)`;
      customCursor.current.style.opacity = 1
  }
   
  useGSAP(
    ()=>{
     gsap.to(".number" ,{
     scrollTrigger:{
      trigger: ".number",
      scrub: true,
      start:"-100% top",
      end:"130% 10%",
     },
     opacity: 0
     })
    }
  )
   
  return (
    <>
      <div className="main w-full h-full bg-[#fcf9f1fc]">
        <div ref={customCursor} className="bg-black cursor z-50 h-9 w-9 fixed top-0 left-0 rounded-full opacity-0"></div>
        <div ref={screen} onMouseMove={cursorMove} className="page1 h-screen relative bg-[#fcf9f1fc]">
          <Navbar ></Navbar>
          <div className="w-[61.5vh] h-[61.5vh] absolute rounded-full bg-[url('https://www.defprojetos.com/images/uploads/posts/mobile/cidade-center-norte05_1702250970.webp')] bg-cover bg-center bg-no-repeat top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="text-[9rem] whitespace-nowrap top-[16vh] tracking-tighter overflow-hidden relative z-10 w-screen">
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
        <div className="page-2 w-screen h-screen">

        </div>
      </div>
    </>
  );
}

export default App;
