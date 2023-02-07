import './style.css'
import handleWorkParallax from './handleWorkParallax';
import cardCoverWindow from './cardCoverWindow';


window.onload = (e) => handleWorkParallax();


const card = document.getElementById('one');

const section = document.querySelector('section') as HTMLElement;

window.addEventListener('mousewheel', (e) => {

  // if(e.wheelDelta <0){
  //   scroll to see bottom
  // }
  // else{
  //   scrolled to see top
  // }
  
  // card?.animate({transform:`scale(1,3.5)`,postion:`absolute`, transformOrigin: `bottom`}, {duration:1200, fill: 'forwards'})

  // card?.animate({width:`100vw`}, {duration:1200, fill:'forwards'})

}, false) 

