import {  Component,  Input } from "@angular/core";
import { RouterOutlet} from "@angular/router";
@Component
({
    selector:"item_creation",
    template:`<nav style="display:block"><input placeholder="Name of {{type}}" #name/><button (click)="createContainer(name)">Create New {{type}}</button></nav><router-outlet></router-outlet>`,
    standalone:true,
    imports: [RouterOutlet]
  }) 
 
export class ItemCreation{
    @Input() type:string="";
    @Input() path:string="";
    async createContainer(nameBox:HTMLInputElement){
         await fetch("http://localhost:9000/"+this.path+"name="+nameBox.value, {method:"POST"});
         
         nameBox.value="";
    }
    
}