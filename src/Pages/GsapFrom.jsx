import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function GsapFrom() {
    useGSAP(()=>{
        gsap.from('#green-box',{
            x:250,
            repeat:-1,
            yoyo:true,
            rotation:360,
            duration:2,
            ease:'power1.inOut'
        })
    },[])
  return (
    <>
        <div id='green-box' className='h-20 w-20 bg-green-500 rounded-lg'></div>
    </>
  )
}

export default GsapFrom