import './style.css'
import handleWorkParallax from './handleWorkParallax';
import cardCoverWindow from './cardCoverWindow';


window.onload = (e) => handleWorkParallax();


const card = document.getElementById('four');
const wnds = document.querySelectorAll('.window');
const track = document.querySelector('.work-preview');
const nav = document.querySelector('.navbar');
const message = document.querySelector('.message');


window.onwheel = (e:WheelEvent) => {
  if(e.deltaY < 0 ){
    //
  }
  else{
   
    const middle = window.innerWidth/2;

    // nav?.animate({width:'0px', height:'0px'}, {duration:1100, fill: 'forwards'})
    // message?.animate({width:'0px', height:'0px'}, {duration:1100, fill: 'forwards'})


  wnds.forEach((elem, idx) => {

    const prop = elem.getBoundingClientRect();
    

    
    if( idx < 3){
      elem.animate({width:`0vw`, height:`0vh`,  borderRadius: `0 0 0 0`}, {duration: 1200, fill: 'forwards'})
    elem.animate({postion: 'fixed'}, {duration:0, delay:1300, fill:'forwards'})
    }
    if(idx === 3){

    elem.animate({width:`105vw`, height:`100vh`,}, {duration:1200, fill:'forwards'})
    
      
    }
    else{
      elem.animate({width:`0vw`, height:`0vh`,borderRadius: `0 0 0 0`}, {duration: 1200, fill: 'forwards'})
    elem.animate({postion: 'fixed'}, {duration:0, delay:1300, fill:'forwards'})
    }

    // track?.animate({overflow:'hidden',gap:`0`}, {duration:100, fill:'forwards'})


    


  })
    

  }
}
