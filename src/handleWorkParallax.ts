

export default function handleWorkParallax(){
    
const track = document.querySelector<HTMLDivElement>('.work-preview');
const images = document.querySelectorAll<HTMLImageElement>('.work-preview .item-hints');


const handleDownEvent = (e:number) => {
    track!.dataset.mouseAt = `${e}`;
};

const handleUpEvent = () => {

  track!.dataset.mouseAt = "0";
  track!.dataset.prevPercentage = `${track!.dataset.percentage}`;
}

function changeLayout(deltaPercentage:number){

  const prevPercentage = track!.dataset.prevPercentage as string;
  const unconstrainedPercentage = deltaPercentage + parseInt(prevPercentage);
  const nextPercentage = Math.max(Math.min(unconstrainedPercentage, 3), -21);
  track!.dataset.percentage = `${nextPercentage}`;

  track?.animate({
        transform: `translate(${nextPercentage}%, 0)`, animationTimingFunction:`cubic-bezier(0.5, 1, 0.89, 1)`
      }, {duration: 1200, fill:'forwards'});
    
      images.forEach((img,idx) => {
        img.animate({
          backgroundPosition: `${50+nextPercentage}% center`
        }, {duration: 1200, fill:'forwards'});
      })
}

const handleTrackMove = (e:number) => {
  if(track!.dataset.mouseAt === '0' ) return;

  const initialTrack = track!.dataset.mouseAt as any; 
  const delta = (e - initialTrack)/(window.innerWidth);

  const deltaPercentage = delta*50;

   changeLayout(deltaPercentage);


}


track!.onmousemove = e =>  handleTrackMove(-e.clientX);

track!.onmouseenter = e => handleDownEvent(-e.clientX);

track!.onmouseleave = _ => handleUpEvent();

track!.ontouchstart = e => handleDownEvent(e.touches[0].clientX);

track!.ontouchmove = (e) => handleTrackMove(e.touches[0].clientX);

track!.ontouchend =(e) => handleTrackMove(e.touches[0].clientX);
}
