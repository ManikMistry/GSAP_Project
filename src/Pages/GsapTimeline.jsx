import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function GsapTimeline() {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });
  useGSAP(() => {
    timeline.to("#red-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#red-box", {
      Y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#red-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);

  const controlAnimation=()=>{
    console.log("button-clicked")
    if (timeline.pause()) {
        timeline.play();
      } else {
        timeline.pause();
      }
  }
  return (
    <>
      <button
        className=" bg-slate-400 p-5 rounded-lg"
        onClick={()=>controlAnimation()}>
        Play/Pause
      </button>
      <div id="red-box" className="h-20 w-20 bg-red-500 rounded-lg"></div>
    </>
  );
}

export default GsapTimeline;
