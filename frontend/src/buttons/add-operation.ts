import { Component, ApplicationRef, createComponent, Input, input } from "@angular/core";
import { ArithmeticMenu } from "../arithmetic menu";
@Component({
    selector: "add-operation",
    template: "<button name={{holder()}} (click)='addOperation()'>Add Operation</button>"
})
export class AddOperation{
    holder=input<string>("hello");
    constructor(private appRef:ApplicationRef){

    }
    addOperation(){
        const parent:HTMLDivElement=document.getElementById(this.holder()) as HTMLDivElement;
        createComponent(ArithmeticMenu, {hostElement:parent, environmentInjector:this.appRef.injector});

    }
}