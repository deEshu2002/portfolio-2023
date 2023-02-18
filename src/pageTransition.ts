

const temp = document.querySelector(':root') as HTMLElement;
const body =  document.querySelector('body') as HTMLBodyElement;


function scaleThenShrinkCard(){

  for (let i = 0; i < 100; i++) {
  setTimeout(() => {
      temp.style.setProperty('--card-after-height', `${i * 2}%`);
    }, 50)

  setTimeout(() => {
      temp.style.setProperty('--card-after-width', `${100 + i * 1.5}%`);
    }, 250)
  }
  
  for (let i = 200; i > 0; i--) {
    setTimeout(() => {
      temp.style.setProperty('--card-after-height', `${i}%`);
    }, 950)
  }
}

export function hideBodyTimeOut(after:number){
  setTimeout(() => {
  body.style.visibility = 'hidden';
  }, after)
}



function clear(node:ChildNode) {
  while (node.hasChildNodes()) {
    clear(node.firstChild as ChildNode);
  }
  node.parentNode!.removeChild(node);
}

function clearInner(node:HTMLBodyElement) {
  while (node.hasChildNodes()) {
    clear(node.firstChild as ChildNode);
  }
}


export function emptyBodyNodeTimeOut(after:number = 1800){
  
    setTimeout(() => {
      clearInner(body);
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
 console.log(history.state);

  if(history.state.position - 1 === 1){
    scaleThenShrinkCard();
    hideBodyTimeOut(800);
    emptyBodyNodeTimeOut(1800);
  }else{
    maskTransition();
    hideBodyTimeOut(800);
    emptyBodyNodeTimeOut(1800);
  }

}


