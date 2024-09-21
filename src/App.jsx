import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const App = () => {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  useGSAP(()=>{
    document.querySelectorAll(".elem").forEach(elem => {
      let image = elem.querySelector("img")
      let tl = gsap.timeline()
    
      let xTransform = gsap.utils.random(-100, 100);
      
    
        tl
        .set(image, {
          transformOrigin: `${xTransform < 0 ? 0 : '100%' }`,
        }, "start")
        .to (image, {
           scale: 0,
           ease:'none',
           scrollTrigger: {
              trigger: image,
              start: 'top top',
              end: 'bottom top',
              scrub: true
           }
            
        }, "start")
        .to(elem, {
          xPercent: xTransform,
          // ease:"Power4.easeInOut",
          ease:"none",
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
         }
        })
    })
  })

  return (
    <div className="w-ful bg-zinc-900">
      <div className="grid grid-cols-8 grid-rows-20 gap-2 ">

        <div className="elem col-span-1 row-span-1" style={{'--r': 1,'--c': 3,}} >
          <img src="./img/1.jpg" alt="Image 1" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 1,'--c': 7,}}>
          <img src="./img/2.jpg" alt="Image 2" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 2,'--c': 2,}}>
          <img src="./img/3.jpg" alt="Image 3" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 2,'--c': 6,}}>
          <img src="./img/4.jpg" alt="Image 4" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 3,'--c': 4,}}>
          <img src="./img/5.jpg" alt="Image 5" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 3,'--c': 8,}}>
          <img src="./img/6.jpg" alt="Image 6" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 4,'--c': 1,}}>
          <img src="./img/7.jpg" alt="Image 7" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 4,'--c': 4,}}>
          <img src="./img/8.jpg" alt="Image 8" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 5,'--c': 2,}}>
          <img src="./img/9.jpg" alt="Image 9" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 5,'--c': 6,}}>
          <img src="./img/10.jpg" alt="Image 10" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 6,'--c': 3,}}>
          <img src="./img/11.jpg" alt="Image 11" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 6,'--c': 7,}}>
          <img src="./img/12.jpg" alt="Image 12" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 4,'--c': 5,}}>
          <img src="./img/13.jpg" alt="Image 13" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 7,'--c': 8,}}>
          <img src="./img/14.jpg" alt="Image 14" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 8,'--c': 1,}}>
          <img src="./img/15.jpg" alt="Image 15" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 8,'--c': 4,}}>
          <img src="./img/16.jpg" alt="Image 16" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 9,'--c': 2,}}>
          <img src="./img/17.jpg" alt="Image 17" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 9,'--c': 6,}}>
          <img src="./img/18.jpg" alt="Image 18" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 10,'--c': 3,}}>
          <img src="./img/19.jpg" alt="Image 19" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{'--r': 10,'--c': 7,}}>
          <img src="./img/20.jpg" alt="Image 20" />
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-8xl uppercase ">Thomas Vance <sup>®</sup></h1>
        <h1 className="text-5xl">並外れたファッション</h1>
      </div>

      <div className="w-full h-screen mx-auto bg-[#C3BCBC] py-96 relative z-[999]  flex items-center justify-center  text-center">
        <p className=" text-5xl w-3/5 leading-[3.5rem] font-regular text-left">From the dawn of civilisation onwards
          crowds have always undergone the influence of illusions. It is to the creators of illusions that they
          have raised more temples, statues, and altars than to any other className of men.® </p>
      </div>

    </div>
  )
}

export default App