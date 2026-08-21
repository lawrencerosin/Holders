import { Component, Input } from "@angular/core";

import {ItemCreation} from "./item creation";
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"chart-adder",
    imports: [ItemCreation, RouterOutlet],
    template:` <nav id="charts"><select #chartsMenu ><option></option></select><item_creation type="Chart" path="api"></item_creation></nav><router-outlet></router-outlet>`
})
export class ChartAdder{
    @Input() database:string="";
     api:string="newChart/database="+this.database+"&";
}   