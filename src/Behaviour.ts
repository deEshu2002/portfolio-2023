
export default function Behaviour(){

var lastScrollTop = 0;

function visibleOnView() {
  let options = {
    root: document.querySelector('#scroll-area'),
    rootMargin: '0px',
    threshold: 0,
  }

  let callback = (entries: any) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.add('fadeInUp');
      } else {
        // entry.target.classList.remove('show');
      }
    })
  }

  let observer = new IntersectionObserver(callback, options);

  let hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
}

function animateHeading() {
  let heading = document.querySelector('.heading') as HTMLHeadingElement;
  let headingSpan = document.querySelector('.heading span') as HTMLSpanElement;
  const words = heading.innerText.split("");

  heading.removeChild(headingSpan);

  for (let i = 0; i < words.length; i++) {
    const letterSpan = document.createElement('span');
    letterSpan.className = 'letter';

    const letterContent = document.createTextNode(words[i]);
    letterSpan.appendChild(letterContent);

    heading.appendChild(letterSpan);

    letterSpan.animate({ transform: `translate(0,0) `, animationTimingFunction: `cubic-bezier(0.87, 0, 0.13, 1)` }, { duration: 850, fill: 'forwards', delay: i * 150 + 1000 })
    letterSpan.animate({ transform: `rotate(-15deg)`, animationTimingFunction: `cubic-bezier(0.87, 0, 0.13, 1)` }, { duration: 750, fill: 'forwards', delay: i * 150 + 1000 })
  }

  let superscript = heading.nextElementSibling as HTMLHeadingElement;
  superscript.animate({ transform: `translate(0,-5%)`, opacity: 1 }, { duration: 300, fill: 'forwards', delay: (words.length - 1) * 250 + 1000 });

}

function toggleNav(){

  var st = window.pageYOffset || document.documentElement.scrollTop;
  const imageContainer = document.querySelector('#background-image') as HTMLDivElement;
  const nav = document.querySelector('.work-view-nav') as HTMLDivElement;

  if (st > lastScrollTop) {
    // downscroll code
    imageContainer?.animate({ height: `60vh` }, { duration: 1200, fill: 'forwards' })
    nav?.animate({ opacity: 1, height: `30px`, padding: '1.5rem 1rem ', zIndex: 100 }, { duration: 1200, fill: 'forwards' });
  }
  else if (st < lastScrollTop) {

    imageContainer?.animate({ height: `70vh` }, { duration: 1200, fill: 'forwards' })
    nav?.animate({ opacity: nav.getBoundingClientRect().top == 0 ? 1 : 0, height: `0`, padding: `${nav.getBoundingClientRect().top == 0 ? '1.5rem 1rem' : 0}`, zIndex: 100 }, { duration: 1200, fill: 'forwards' })
    // upscroll code
  } // else was horizontal scroll

  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}



window.addEventListener("scroll", toggleNav, false);

  animateHeading();
  visibleOnView();
}
