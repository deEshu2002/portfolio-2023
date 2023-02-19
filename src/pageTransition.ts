

const temp = document.querySelector(':root') as HTMLElement;
const body =  document.querySelector('body') as HTMLBodyElement;
const app = document.querySelector('#app') as HTMLDivElement;


function scaleThenShrinkCard(){

  for (let i = 0; i < 100; i++) {
  setTimeout(() => {
      temp.style.setProperty('--card-after-height', `${i * 2}%`);
    }, 50)

  setTimeout(() => {
      temp.style.setProperty('--card-after-width', `${100 + i * 1.5}%`);
    }, 250)
  }
  
  for (let i = 200; i >= 0; i--) {
    setTimeout(() => {
      temp.style.setProperty('--card-after-height', `${i}%`);
    }, 950)
  }
}

export function hideBodyTimeOut(after:number){
  setTimeout(() => {
    body.style.visibility = 'hidden';
  }, after)

  setTimeout(() => {
    body.style.visibility = 'visible';
  }, 2000);
 
}


export function setAppDisplay( after:number = 1800){
    setTimeout(() => {
      app.style.display = 'none';
    }, after)
}

function maskTransition(){

  const transitionWindow = document.querySelector('#transition-curtain') as HTMLDivElement;
  transitionWindow!.style.transform = 'translate(0%)'; 
  transitionWindow!.animate({backgroundColor:`hsl(100,100%,100%)`}, {duration:2000, fill:'forwards'}) 
  setTimeout(() => transitionWindow!.style.transform = 'translate(100%)',1000); 

}

// 800-> hide, 1800->removeNode

export default function pageTransition(){

  // pathname to guard history.back() and position state to guard the within window transition
  if(window.location.pathname === '/portfolio-2023/' || history.state.position > 2 ){
    maskTransition();
    hideBodyTimeOut(800);
    setAppDisplay(1800);
  }else{
    scaleThenShrinkCard();
    hideBodyTimeOut(800);
    setAppDisplay(1800);
  }

}


