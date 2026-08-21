import { Component, Input, Renderer2, ElementRef, ViewChild } from "@angular/core"; 
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"record-adder",
    imports: [RouterOutlet],
    template:`<form style='display:none' name='added'><button (click)='addRecord()' type='button'>Add Record</button></form><router-outlet></router-outlet>`
})
export class RecordAdder{
   @Input() database:string="";
   @Input() chart:string="";
   @ViewChild("renderer") renderer:Renderer2;
   
   constructor(renderer:Renderer2, element: ElementRef){
    this.renderer=renderer;
     
   }
   addProperty(adder:HTMLButtonElement){
   
    const properties:HTMLSpanElement=document.getElementById("properties") as HTMLSpanElement;
    
    
    
    if(properties!==null){
        const newProperty:HTMLSpanElement=properties.children[0].cloneNode(true) as HTMLSpanElement;
        
        properties.insertBefore(newProperty, adder);
    }
   }
   async addRecord(){
         const added=document.getElementsByName("added")[0];
         const databaseMenu:HTMLSelectElement=document.getElementById("databaseMenu") as HTMLSelectElement;
         const database:string=databaseMenu.value;
         const chartMenu:HTMLSelectElement=document.getElementById("chartMenu") as HTMLSelectElement;
         const chart:string=chartMenu.value;
        const properties:HTMLCollectionOf<HTMLInputElement>=added.getElementsByTagName("input") as HTMLCollectionOf<HTMLInputElement>;
         let propertyCommand="";
        for(let position=0; position<properties.length; position++){
                    propertyCommand+=`${properties[position].getAttribute("placeholder")}=${properties[position].value}`;
                    if(position<properties.length-1)
                        propertyCommand+="&";
        }
       
      await fetch(`http://localhost:9000/add/${database}/${chart}?${propertyCommand}`, {method:"POST"})
    
   }
}