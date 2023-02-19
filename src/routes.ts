
import DynamicHtml from './DynamicHtml';
import { RouteType } from './DynamicHtml';
import {home as removedApp} from './main';


function RenderData(name:RouteType):HTMLDivElement{
        const htmlString = DynamicHtml(name);
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString,'text/html')
        const app = doc.querySelector('#work') as HTMLDivElement;
        return app;
}

export default function Routes(path: string):HTMLDivElement {
    let app;
        switch(path){
             case '/portfolio-2023/one':
                app = RenderData('one');
                break;
             case '/portfolio-2023/two':
                 app = RenderData('two');
                break;
             case '/portfolio-2023/three':
                 app = RenderData('three');
                break;
             case '/portfolio-2023/four':
                 app = RenderData('four');
                break;
             case '/portfolio-2023/five':
                 app = RenderData('five');
                break;
             case '/portfolio-2023/six':
                 app = RenderData('six');
                break;
             case '/portfolio-2023/seven':
                 app = RenderData('seven');
                break;
             case '/portfolio-2023/eight':
                 app = RenderData('eight');
                break;
            default:
                break; 
        }
        console.log(app);
        return app as HTMLDivElement;
};