

const temp = document.querySelector(':root') as HTMLElement;
let body = document.querySelector("body") as HTMLBodyElement;


function scaleWidthHeightTimeOut(heigth:number, width:number){
  for (let i = 0; i < 100; i++) {

  setTimeout(() => {
      temp.style.setProperty('--card-after-height', `${i * 2}%`);
    }, heigth)

  setTimeout(() => {
      temp.style.setProperty('--card-after-width', `${100 + i * 1.5}%`);
    }, width)
  }

}


function hideBodyTimeOut(after:number){
  setTimeout(() => {
  body.style.visibility = 'hidden';
  }, after)
}

function downScaleHeightTimeOut(after:number){
  for (let i = 200; i > 0; i--) {

    setTimeout(() => {
      temp.style.setProperty('--card-after-height', `${i}%`);
    }, after)
  }
}
  

function clearInner(node: any) {
      while (node.hasChildNodes()) {
        clear(node.firstChild);
      }
    }

function clear(node: any) {
      while (node.hasChildNodes()) {
        clear(node.firstChild);
      }
      node.parentNode.removeChild(node);
    }


function emptyBodyNodeTimeOut(after:number){
    setTimeout(() => {
      clearInner(body);
    }, after)
}



export default function scaleCardRemoveRoot(){
  scaleWidthHeightTimeOut(50,250);
  hideBodyTimeOut(850);
  downScaleHeightTimeOut(950);
  emptyBodyNodeTimeOut(1800);
}


