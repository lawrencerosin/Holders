import { Component } from "@angular/core";
import { Type } from "./type";
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"property-creation",
    imports: [Type, RouterOutlet],
    template:"<input placeholder='Property Name'/><type></type><input placeholder='Property Value'/><router-outlet></router-outlet>"
})
export class PropertyCreation{

}