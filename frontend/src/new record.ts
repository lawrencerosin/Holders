import { Component } from "@angular/core"; 
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"new-record",
    imports: [RouterOutlet],
    template:`<span style='display:none'><button (click)='addRecord()'>Add Record</button></span><router-outlet></router-outlet>`
})
export class NewRecord{
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