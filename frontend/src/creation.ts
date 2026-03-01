import {  Component,    ElementRef,  Input, ViewChild } from "@angular/core";
import { RouterOutlet} from "@angular/router";
@Component
({
    selector:"creation",
    template:`<nav style="display:block"><input placeholder="Name of {{type}}"/><button>Create New {{type}}</button></nav><router-outlet></router-outlet>`,
    standalone:true,
    imports: [RouterOutlet]
  }) 
 
export class Creation{
    @Input() type:string="";
    
}