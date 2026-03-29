import { Component, ViewContainerRef } from "@angular/core";
import { PropertyCreation } from "./property creation"
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"record-creation",
    imports: [PropertyCreation, RouterOutlet],
    template:`<span id='properties' style="display:none">
        <span ><property-creation></property-creation></span>
    <button (click)='addProperty(adder)' #adder>Add Property</button><button (click)='addRecord()'>Add Record</button></span><router-outlet></router-outlet>`
})
export class RecordCreation{
   addProperty(adder:HTMLButtonElement){
   
    const properties:HTMLSpanElement=document.getElementById("properties") as HTMLSpanElement;
    
    
    
    if(properties!==null){
        const newProperty:HTMLSpanElement=properties.children[0].cloneNode(true) as HTMLSpanElement;
        
        properties.insertBefore(newProperty, adder);
    }
   }
   addRecord(){
    
   }
}