import './style.css'

import {handleDownEvent, handleTrackMove, handleUpEvent} from "./handleWorkParallax";
import render from './render';

const track = document.querySelector<HTMLDivElement>('.work-preview');
const wnds = document.querySelectorAll('.window');

export let giveMaxMin = false;




history.replaceState({position:1}, '' );



// function handleScaling(e: WheelEvent) {
//   if (e.deltaY < 0) {
//   }
//   else {
//     if(new URL(window.location.href).pathname == '/'){
//       pageTransition('/');
//     }
//   }
// }



const subEvents = () => {
  // parallax Events
  track?.addEventListener("mousemove", (e) => {
    handleTrackMove(-e.clientX)
  }, true)
  
  track?.addEventListener("mouseenter", (e) => {
    handleDownEvent(-e.clientX);
  }, true)
  
  track?.addEventListener("mouseleave", () => {
    handleUpEvent();
  }, true)
  
  track?.addEventListener("touchstart", (e) => {
    handleDownEvent(e.touches[0].clientX);
  }, true)
  
  track?.addEventListener("touchmove", (e) => {
    handleTrackMove(e.touches[0].clientX);
  }, true)
  
  track?.addEventListener("touchend", (e) => {
    handleTrackMove(e.touches[0].clientX);
  }, true);
  
}
  
  window.onload = function(){
    giveMaxMin = true;
    subEvents();
    const currPathName = window.location.pathname;
    if(currPathName !== '/portfolio-2023/'){
      // pushHistory(of /portfolio-2023);
      render(currPathName);
    }
  }



  


function windowClick(e:Event){
  const a = e.currentTarget as HTMLAnchorElement;
  e.preventDefault();
  const path = new URL(a.href);
  window.history.pushState({position: history.state.position + 1},'', path);
  render(path.pathname.toString());
}



  // Events for window Navigation through clicks
  wnds.forEach((elem) => {
    elem.addEventListener("click", windowClick, true);
  })



// window.addEventListener("wheel", function () {
  // handleScaling(e);
// }, { once: true })



window.addEventListener("popstate", () =>{
  const historyPath = new URL(window.location.href).pathname;
  render(historyPath);
}
);






