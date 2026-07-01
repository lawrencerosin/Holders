import { Component, ApplicationRef, createComponent } from "@angular/core";
import { ArithmeticMenu } from "../arithmetic menu";
@Component({
    selector: "assignment",
    template: "<div id='change'><input placeholder='Property or Value'/>=<input placeholder='Property or Value'/></div>"
})
export class Assignment{
    constructor(private appRef:ApplicationRef){

    }
    addOperation(){
        const change:HTMLDivElement=document.getElementById("change") as HTMLDivElement;
        createComponent(ArithmeticMenu, {hostElement:change, environmentInjector:this.appRef.injector});

    }
}