import { Component, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PropertyMenu } from "./property menu";
@Component({
   selector:"property-list",
   template:"<span id='propertyList'><property-menu database={{database}} chart={{chart}}></property-menu><button>Add Property</button></span><router-outlet></router-outlet>",
   imports:[RouterOutlet, PropertyMenu]
})
export class PropertyList{
   @Input() database:string="";
   @Input() chart:string="";
}