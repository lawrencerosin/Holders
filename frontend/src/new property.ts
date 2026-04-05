import { Component, Input } from "@angular/core";
import { Type } from "./type";
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"new-property",
    imports: [Type, RouterOutlet],
    template:"<span style='display:none' id='newProperty'><span #property><input required placeholder='Property Name'   ngmodel title='The property name must start with a letter, and then contain only letters, numbers, and the underscore.'  #propertyName pattern='\\d[A-Za-z_][A-Za-z1-9_]\\d' /><type></type><button (click)='addProperty(propertyName)'>Add Property</button><router-outlet></router-outlet></span></span>"
})
export class NewProperty{
   @Input() database:string="";
   @Input() chart:string="";
   
   async addProperty(propertyName:HTMLInputElement){
      const propertyType:HTMLSelectElement=propertyName.nextElementSibling?.children[0]  as HTMLSelectElement;
      
      await fetch(`http://localhost:9000/newProperty?database=${this.database}&chart=${this.chart}&name=${propertyName.value}&type=${propertyType.value}`, {method:"POST"});
       if(propertyName.parentElement!==null&&propertyName.parentElement.parentElement!==null)
         propertyName.parentElement.parentElement.style.display="none";
   }
}