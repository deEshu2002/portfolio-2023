import './style.css'

import { handleDownEvent, handleUpEvent, handleTrackMove } from './handleWorkParallax';
import scaleCardRemoveRoot from './scaleCardRemoveRoot';
import Routes from './routes';
import Behaviour from './Behaviour';

const track = document.querySelector<HTMLDivElement>('.work-preview');
const wnds = document.querySelectorAll('.window');

let giveMaxMin = false;


function handleScaling(e: WheelEvent) {
  if (e.deltaY < 0) {
  }
  else {
    // scaleDiv();
    scaleCardRemoveRoot();
  }
}


const subEvents = () => {

  track?.addEventListener("mousemove", (e) => {
    const value = (giveMaxMin) ? 14 : 0;
    handleTrackMove(-e.clientX, -value, value)
  }, true)

  track?.addEventListener("mouseenter", (e) => {
    handleDownEvent(-e.clientX);
  }, true)

  track?.addEventListener("mouseleave", (e) => {
    handleUpEvent();
  }, true)

  track?.addEventListener("touchstart", (e) => {
    handleDownEvent(e.touches[0].clientX);
  }, true)

  track?.addEventListener("touchmove", (e) => {
    const value = (giveMaxMin) ? 14 : 0;
    handleTrackMove(e.touches[0].clientX, value, value);
  }, true)

  track?.addEventListener("touchend", (e) => {
    const value = (giveMaxMin) ? 14 : 0;
    handleTrackMove(e.touches[0].clientX, value, value);
  }, true);
}


window.onload = e => {
  giveMaxMin = true;
  subEvents();
}

window.addEventListener("wheel", function (e) {
  // handleScaling(e);
}, { once: true })





wnds.forEach((elem, idx) => {
  const a = elem as HTMLAnchorElement;
  elem.addEventListener("click", (e) =>{

    e.preventDefault();



    const {pathname: path} = new URL(a.href);
            window.history.pushState({path}, path, path);
            render(path);
  }, true);
})


      

const render = async(path:string) => {


      const work = await Routes(path);
      
      scaleCardRemoveRoot();
      setTimeout(() => {
      var body = document.querySelector('body');
      body!.style.visibility = 'visible';
       body!.appendChild(work); 
       Behaviour();
      }, 2000);
}
        
window.addEventListener("popstate", e =>{

      render(new URL(window.location.href).pathname)
    }
    );
  // render("/");