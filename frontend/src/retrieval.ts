import { ApplicationRef, Component, createComponent } from "@angular/core";
import { PropertySelection } from "./property selection";
@Component({
    selector:"retrieval",
    template: "<div id='retrieval'><button (click)='addProperty()'>Add Property</button><button>View Data</button><property-selection></property-selection></div>",
    imports: [PropertySelection]
})
export class Retrieval{
    constructor(private appRef:ApplicationRef){

    }
     addProperty(){
        const retrieval:HTMLElement=<HTMLElement>document.getElementById("retrieval") ;
        const propertySelection=createComponent(PropertySelection, {hostElement:retrieval, environmentInjector:this.appRef.injector});
     }
}