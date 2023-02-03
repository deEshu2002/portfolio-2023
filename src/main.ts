import './style.css'

const track = document.querySelector<HTMLDivElement>('.work-preview');
const images = document.querySelectorAll<HTMLImageElement>('.work-preview img');

function changeLayout(percentage: number){
  const nextPercentageUnconstrained = parseFloat(track!.dataset.prevPercentage as string) + percentage ;

  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 10), -10);

  track!.dataset.percentage = `${nextPercentage}` ;

  track?.animate({
    transform: `translate(${nextPercentage}%, 0)`
  }, {duration: 1200, fill:'forwards'});

  images.forEach((img,idx) => {
    img.animate({
      objectPosition: `${50+nextPercentage}% center`
    }, {duration: 1200, fill: 'forwards'});
  })


}

track!.onmousemove = e => {
  const mouseX = e.clientX;
  const xDecimal = mouseX/window.innerWidth;
  const maxX = track!.offsetWidth - window.innerWidth;

  const panX = maxX * xDecimal * -1;

  changeLayout(panX/10);
}
