import './style.css'

import {handleDownEvent,handleUpEvent, handleTrackMove} from './handleWorkParallax';


const track = document.querySelector<HTMLDivElement>('.work-preview');
const wnds = document.querySelectorAll('.window');

let giveMaxMin = false;

function scaleDiv(id:number = 3, delay:number=0){
  giveMaxMin = false;
  wnds.forEach((win, idx) => {
    const container = win as HTMLDivElement;
    if(idx !== id){
      container.style.zIndex = `10`;
      container.animate({width:`0vw`, height:`0vh`,  borderRadius: `0 0 0 0`, animationTimingFunction:`cubic-bezier(0.32, 0, 0.67, 0)`}, {delay:delay,duration: 700, fill: 'forwards'})
      container.animate({position:`fixed`},{duration:0, delay:700+delay, fill:'forwards'});
    }
    else{
      win.animate({position:'fixed',animationTimingFunction:`cubic-bezier(0.5, 1, 0.89, 1)`}, {duration:0, fill: 'forwards', delay:50+delay})
      win.animate({width:`105vw`, height:`96vh`,}, {delay:delay, duration:600, fill:'forwards'})
    }

  })
}

function handleScaling(e:WheelEvent){
  if(e.deltaY < 0){
  }
  else{
   scaleDiv();
  }
}



const subEvents = () => {

track?.addEventListener("mousemove", (e)=>{
  const value = (giveMaxMin)?50:0;
  handleTrackMove(-e.clientX,-value,value)
},true)

track?.addEventListener("mouseenter", (e) => {
  handleDownEvent(-e.clientX);
},true)

track?.addEventListener("mouseleave", (e) => {
   handleUpEvent();
},true)

track?.addEventListener("touchstart", (e) => {
  handleDownEvent(e.touches[0].clientX);
},true)

track?.addEventListener("touchmove", (e) => {
  const value = (giveMaxMin)?50:0;
  handleTrackMove(e.touches[0].clientX,value,value);
},true)

track?.addEventListener("touchend", (e) => {
  const value = (giveMaxMin)?50:0;
  handleTrackMove(e.touches[0].clientX, value, value);
},true);
}


window.onload = e =>{
  giveMaxMin = true;
  subEvents();
}

window.addEventListener("wheel", function(e){
  handleScaling(e);
}, {once:true})


wnds.forEach((elem, idx) => {
  elem.addEventListener("click", function(){

    const left =  elem.getBoundingClientRect().left + (elem.getBoundingClientRect().width)/2 +40; 

    const offPercentage = (((window.innerWidth/2)-left)*100)/window.innerWidth;

    track?.animate({
        transform: `translate(0, 0)`, animationTimingFunction:`cubic-bezier(0.5, 1, 0.89, 1)`
      }, {duration: 200, fill:'forwards'});
    
    scaleDiv(idx, 200);


  }, true);
})

  
