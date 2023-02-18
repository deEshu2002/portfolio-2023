import './style.css'

import {handleDownEvent, handleTrackMove, handleUpEvent} from "./handleWorkParallax";
import pageTransition from './pageTransition';
import Routes from './routes';
import Behaviour from './Behaviour';

const track = document.querySelector<HTMLDivElement>('.work-preview');
const wnds = document.querySelectorAll('.window');

export let giveMaxMin = false;




history.replaceState({position:1}, '' );



function handleScaling(e: WheelEvent) {
  if (e.deltaY < 0) {
  }
  else {
    // scaleDiv();
    if(new URL(window.location.href).pathname == '/'){
      pageTransition('/');
    }
  }
}




const firstPage = document.querySelector('#app');

export const home = firstPage!.cloneNode(true);


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



function windowClick(e:Event){
  const a = e.currentTarget as HTMLAnchorElement;
    e.preventDefault();
    const path = new URL(a.href);
            window.history.pushState({position: history.state.position + 1},'', path);
            render(path.pathname.toString());
}


wnds.forEach((elem, idx) => {
  elem.addEventListener("click", windowClick, true);
})


const render = async(path:string) => {

  // setTimeout(() => wnds.forEach((elem,idx) => {
  //   elem.removeEventListener("click", windowClick, true);
  // }),10);
      const work = await Routes(path);
      pageTransition(path);

      setTimeout(() => {
      var body = document.querySelector('body');
      body!.style.visibility = 'visible';
       body!.appendChild(work); 
       
      }, 2000);
      setTimeout(()=> {
        if(window.location.pathname !== '/'){
          Behaviour();
         }else{
            subEvents();
         }
      },2001)
}
        
window.addEventListener("popstate", e =>{
  const historyPath = new URL(window.location.href).pathname;
      render(historyPath);
    }
    );
