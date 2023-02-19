import Behaviour from "./Behaviour";
import pageTransition from "./pageTransition";
import Routes from "./routes";



const body = document.querySelector('body') as HTMLBodyElement;
const app = document.querySelector('#app') as HTMLDivElement;


const render = async(path:string) => {

      const correspondingPage = await Routes(path);
      pageTransition();

      if(window.location.pathname === '/portfolio-2023/'){
          const work = document.querySelector('#work') as HTMLDivElement;
          setTimeout(() => {
          body.removeChild(work);
            app.style.display = 'flex';
          }, 1800);
        //   make app display change
        }else if(body.contains(document.querySelector('#work') as HTMLDivElement)){
          //   replaceChild 
          const work = document.querySelector('#work') as HTMLDivElement;
          setTimeout(() => {
          body.replaceChild(work,correspondingPage);
          },2001);
        }else {
            //   appendChild
          setTimeout(() => {
            body.appendChild(correspondingPage);
            Behaviour();
          },2001);
        }

}




export default  render;
