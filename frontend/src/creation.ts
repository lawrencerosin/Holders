import { Component,  Input } from "@angular/core";
@Component({
    selector:"creation",
    template:`{{type}}<select id={{id}} ><option value='use'>Use</option><option value='new'>New</option><option value='destroy'>Destroy</option></select>`
}) 
export class Creation{
    @Input() type:string="";
    @Input() id:string="";
    
}