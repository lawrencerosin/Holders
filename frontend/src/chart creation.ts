import { Component, Input } from "@angular/core";

import {ItemCreation} from "./item creation";
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"chart_creation",
    imports: [ItemCreation, RouterOutlet],
    template:` <nav id="charts"><select #chartsMenu ><option></option></select><item_creation type="Chart" path="api"></item_creation></nav><router-outlet></router-outlet>`
})
export class ChartCreation{
    @Input() database:string="";
     api:string="newChart/database="+this.database+"&";
}   