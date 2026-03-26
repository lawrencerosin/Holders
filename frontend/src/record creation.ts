import { Component, ViewContainerRef } from "@angular/core";
import { PropertyCreation } from "./property creation"
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"record-creation",
    imports: [PropertyCreation, RouterOutlet],
    template:`<span id='properties'>
        <span><property-creation></property-creation></span>
    <button (click)='addProperty()'>Add Property</button></span><router-outlet></router-outlet>`
})
export class RecordCreation{
   addProperty(){
   
    const properties:HTMLSpanElement=document.getElementById("properties") as HTMLSpanElement;
    
    const adder:HTMLButtonElement=properties.children[properties.children.length-1] as HTMLButtonElement;
    
    if(properties!==null){
        const newProperty:HTMLSpanElement=document.children[1].cloneNode(true) as HTMLSpanElement;
        properties.insertBefore(newProperty, adder);
    }
   }
}