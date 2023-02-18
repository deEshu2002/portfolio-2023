
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
             case '/':
                 app = removedApp;
                 break;
             case '/one':
                app = RenderData('one');

                break;
             case '/two':
                 app = RenderData('two');
                break;
             case '/three':
                 app = RenderData('three');
                break;
             case '/four':
                 app = RenderData('four');
                break;
             case '/five':
                 app = RenderData('five');
                break;
             case '/six':
                 app = RenderData('six');
                break;
             case '/seven':
                 app = RenderData('seven');
                break;
             case '/eight':
                 app = RenderData('eight');
                break;
            default:
                break; 
        }
        console.log(app);
        return app as HTMLDivElement;
};