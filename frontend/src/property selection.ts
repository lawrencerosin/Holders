import { Component } from "@angular/core";
 
@Component({
    selector:"property-selection",
    template:"<span #property><input placeholder='Property Name'/><button (click)='removeProperty(property)' >Delete</button></span>"
})
export class PropertySelection{
     removeProperty(property:HTMLSpanElement){
        if(property.parentElement!==null)
           property.parentElement.removeChild(property);
     }
}