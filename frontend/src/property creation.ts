import { Component } from "@angular/core";
import { Type } from "./type";
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"property-creation",
    imports: [Type, RouterOutlet],
    template:"<span><span #property><input placeholder='Property Name'/><type></type><input placeholder='Property Value'/><button (click)='remove(property)'>Remove</button><router-outlet></router-outlet></span></span>"
})
export class PropertyCreation{
   remove(property:HTMLSpanElement){
      if(property.parentElement!==null){
      property.parentElement.removeChild(property);
      alert("hllo");
      }
   }
}