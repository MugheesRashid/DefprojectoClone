import { useEffect, useRef, useState } from 'react';
import './App.css';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin  } from "gsap/ScrollToPlugin"


import PageOne from "./components/PageOne"
import PageTwo from "./components/PageTwo"
import PageThree from './components/PageThree';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function App() {
  const customCursor = useRef(null);
  const screen = useRef(null)


  const cursorMove = (dets) => {
    customCursor.current.style.transform = `translate3d(${dets.clientX -
      customCursor.current.clientWidth / 2}px, ${dets.clientY -
      customCursor.current.clientHeight / 2}px, 0)`;
    customCursor.current.style.opacity = 1
  }

  const cursorOut = () => {
    customCursor.current.style.opacity = 0
  }


useGSAP(
  () => {
    const tl = gsap.timeline()
    tl.to(".number", {
      scrollTrigger: {
        trigger: ".number",
        scrub: true,
        start: "-100% top",
        end: "130% 20%",
      },
      opacity: 0
    })

    ScrollTrigger.create({
      trigger: ".page-2",
      pin: true,
      start: "-10% top",
      end: "210% bottom",
    })
      
    ScrollTrigger.create({
      trigger: ".page-3",
      pin: true,
      start: "top 10%",
      end: "370% bottom",
    })

    tl.from(".images", {
      scrollTrigger: {
        trigger: ".images",
        start: "-10% 40%",
        end: "80% bottom",
        scrub: 1,
      },
      y: -10,
      scaleY: 2.3,
      scaleX: 1.5,
    })

    tl.from(".img-1", {
      scrollTrigger: {
        trigger: ".images",
        start: "10% 40%",
        end: "70% bottom",
        scrub: true,
      },
      ease: "power1.out",
      scale: 1.4,
    })

    tl.from("h1 span", {
      scrollTrigger: {
        trigger: ".images",
        start: "20% 40%",
        end: "40% center",
        scrub: 1,
      },
      x: "170%",
      opacity: 0,
      scale: 1.2,
      duration: 1,
      stagger: 0.2,
    })

    tl.to("h1", {
      scrollTrigger: {
        trigger: "h1 span",
        start: "50% 40%",
        end: "80% center",
        scrub: 1,
      },
      ease: "power2.inOut",
      scale: 1.6,
      opacity: 0,
      duration: 0.5,
    })

    tl.from("h2", {
      scrollTrigger: {
        trigger: "h1 span",
        start: "50% 40%",
        end: "80% center",
        scrub: 1,
      },
      opacity: 0,
      scale: 0
    })

    tl.to(".img-1", {
      scrollTrigger: {
        trigger: "h1 span",
        start: "50% 40%",
        end: "100% center",
        scrub: 1,
      },
      y: "-100%",
      duration: 2,
      delay: 1
    })

    tl.from(".img-2", {
      scrollTrigger: {
        trigger: "h1 span",
        start: "50% 30%",
        end: "120% center",
        scrub: 1,
      },
      scale: 1.4,
      duration: 2,
      delay: 1
    })
      
    tl.from(".flexible", {
      scrollTrigger: {
        trigger: ".flexible",
        start: "top bottom",
        end: "35% center",
        scrub: 1,
      },
      x: "-50%",
      duration: 2,
      delay: 0
    })

    tl.from(".text-box", {
      scrollTrigger:{
      trigger: ".page-3",
      start: "top 10%",
      end: "80% center",
      scrub: 1,
      },
      opacity: 0,
      ease: "power4.out",
      })
      
    tl.from(".circle", {
      scrollTrigger:{
        trigger: ".page-3",
        start: "top 10%",
        end: "80% center",
        scrub: 1,
        },
      scale: 0,
      ease: "power4.out",
    })

    tl.to(".text-box", {
      scrollTrigger:{
      trigger: ".text-box",
      start: "115% center",
      end: "210% center",
      scrub: 1,
     },
    scrollTo: { y: 400 },
    duration: 1 
  }) 
  tl.to(".jugar", {
    scrollTrigger:{
    trigger: ".jugar",
    start: "90% center",
    end: "150% center",
    scrub: 1,
   },
   opacity: 1
}) 
tl.to(".circle", {
  scrollTrigger:{
    trigger: ".circle",
    start: "630px 10%",
    end: "1000px 12%",
    scrub: 1,
    },
    x: -700,
    duration: 4
})


  },
    

)
  return (
    <>
      <div ref={screen} onMouseMove={cursorMove} onMouseOut={cursorOut} className="main w-full h-full bg-[#fcf9f1fc]">
        <div ref={customCursor} className="cursor "></div>
        <PageOne />
        <PageTwo />
        <PageThree />
        <div className="page-4 w-screen relative h-screen bg-[rgb(33,33,33)]">
        <img className='w-[36vw] h-[36vw] absolute top-[40%] left-1/2 -translate-y-1/2 rounded-lg -translate-x-1/2 z-[11]' src="https://www.defprojetos.com/images/uploads/posts/desktop/hog-cay03_1710294567.webp" alt="" />
          <h3 className='text-[119px] w-full h-full leading-[127px] py-7 text-center tracking-tight font-semibold text-[#fffbf2] relative z-[19]'>WRIAMOS PROJANDTOS<br></br> WOM VALOR-ANDS</h3>
          <p className='bg-[rgb(33,33,33)] flex items-center absolute left-1/2 -translate-x-1/2 bottom-12 py-[0.1rem] text-[16px] pl-5 pr-6 rounded-xl uppercase text-light btn overflow-hidden outline-none border-none z-[999]'><p className='z-[99]'>See our portfolio </p><span className='span-1 z-[99] h-5 w-5 bg-[rgb(33,33,33)] relative -right-5 rounded-full inline-block'></span></p>
        </div>
      </div>
    </>
  );
}

export default App;
