import { Component, Input, Renderer2, ElementRef, ViewChild } from "@angular/core"; 
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"new-record",
    imports: [RouterOutlet],
    template:`<form style='display:none' name='added'><button (click)='addRecord()'>Add Record</button></form><router-outlet></router-outlet>`
})
export class NewRecord{
   @Input() database:string="";
   @Input() chart:string="";
   @ViewChild("renderer") renderer:Renderer2;
   async displayPropertyBoxes(database:string, chart:string){
    const added:HTMLFormElement=document.getElementsByName("added")[0] as HTMLFormElement;
    const propertyAPI=await fetch(`http://localhost:9000/properties?database=${database}&chart=${chart}`);
    const properties=await propertyAPI.json();
    console.log(database);
    for(let property of properties){
        const propertyBox=document.createElement("input");
        propertyBox.setAttribute("placeholder", property);
        added.appendChild(propertyBox);
    }
   }
   constructor(renderer:Renderer2, element: ElementRef){
    this.renderer=renderer;
      this.displayPropertyBoxes(this.database,this.chart);
   }
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