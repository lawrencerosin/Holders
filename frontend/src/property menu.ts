import { Component, ElementRef, Input, Renderer2, ViewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";
@Component({
   selector: "property-menu",
   template:"<select #propertyList name='propertyList'></select><router-outlet></router-outlet>",
   imports: [RouterOutlet]
})
export class PropertyMenu{
   @Input() database:string="";
   @Input() chart:string="";
   @ViewChild("renderer") renderer:Renderer2;
   async displayProperties(database:string, chart:string){
       const properties=await fetch(`http://localhost:9000/properties?database=${database}&chart=${chart}`);
       const names=await properties.json();
      const propertyList:HTMLSelectElement=document.getElementById("propertyList") as HTMLSelectElement;
       for(let position=0; position<names.length; position++){
         const property:HTMLOptionElement=document.createElement("option") as HTMLOptionElement;
         property.value=property.textContent=names[position];
         propertyList.appendChild(property);
       }
   }
   constructor(renderer:Renderer2, element: ElementRef){
      this.renderer=renderer;
      this.displayProperties(this.database, this.chart);
   }

}