

    
const track = document.querySelector<HTMLDivElement>('.work-preview');
const images = document.querySelectorAll<HTMLImageElement>('.work-preview img');



function getMaxMovement(){
  let value:number;
  let width = window.innerWidth;
  if( width >= 1920){
    value = 5;
  }
  else if(width >= 820){
    value = 20;
  }
  else value = 50;

  const maxLeft = -value;
  const maxRight = value;

  return {maxRight, maxLeft} as const;
}


 function changeLayout(deltaPercentage:number){

  const prevPercentage = track!.dataset.prevPercentage as string;
  const unconstrainedPercentage = deltaPercentage + parseInt(prevPercentage);

  const {maxRight,maxLeft }= getMaxMovement();

  const nextPercentage = Math.max(Math.min(unconstrainedPercentage, maxRight), maxLeft);
  track!.dataset.percentage = `${nextPercentage}`;

  track?.animate({
        transform: `translate(${nextPercentage}%, 0)`, animationTimingFunction:`cubic-bezier(0.5, 1, 0.89, 1)`
      }, {duration:900, fill:'forwards'});
    

      images.forEach((img) => {
        img.animate({
          objectPosition: `${50+nextPercentage}% center`
        }, {duration:900, fill:'forwards'});

      })
   console.log(nextPercentage)
}


export const handleDownEvent = (e:number) => {
    track!.dataset.mouseAt = `${e}`;
};

export const handleUpEvent = () => {

  track!.dataset.mouseAt = "0";
  track!.dataset.prevPercentage = `${track!.dataset.percentage}`;
}


export function  handleTrackMove(e:number){
  if(track!.dataset.mouseAt === '0' ) return;

  const initialTrack = track!.dataset.mouseAt as any; 
  const delta = (e - initialTrack)/(window.innerWidth/1.4);

  const deltaPercentage = delta*50;

   changeLayout(deltaPercentage);


}

