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
  

  // card?.animate({minWidth:`100vw`}, {duration:1200, fill:'forwards'})

}, false) 

