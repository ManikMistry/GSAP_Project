import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function GsapFromTo() {
  useGSAP(() => {
    gsap.fromTo(
      "#yellow-box",
      {
        x:0,
        rotation:0,
        borderRadius:'0%'
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius:'100%',
        rotation: 360,
        duration: 2,
        ease: 'bounce.inOut',
      }
    );
  }, []);
  return <>
    <div id="yellow-box" className="h-20 w-20 rounded-lg bg-yellow-400"></div>
  </>;
}

export default GsapFromTo;
