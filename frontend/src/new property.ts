import { Component, Input } from "@angular/core";
import { Type } from "./type";
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"new-property",
    imports: [Type, RouterOutlet],
    template:"<span style='display:none' id='newProperty'><span #property><input required placeholder='Property Name' #propertyName/><type></type><button (click)='createProperty(propertyName)'>Create Property</button><router-outlet></router-outlet></span></span>"
})
export class NewProperty{
   @Input() database:string="";
   @Input() chart:string="";
   async createProperty(propertyName:HTMLInputElement){
       await fetch(`http://localhost:9000/newProperty?database=${this.database}&chart=${this.chart}&name=${propertyName}`);
       if(propertyName.parentElement!==null&&propertyName.parentElement.parentElement!==null)
         propertyName.parentElement.parentElement.style.display="none";
   }
}