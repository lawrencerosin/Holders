import { Component, Input } from "@angular/core";

import {NewItem} from "./new item";
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"new-chart",
    imports: [NewItem, RouterOutlet],
    template:` <nav id="charts"><select #chartsMenu ><option></option></select><new-item type="Chart" path="api"></new-item></nav><router-outlet></router-outlet>`
})
export class NewChart{
    @Input() database:string="";
     api:string="newChart/database="+this.database+"&";
}   