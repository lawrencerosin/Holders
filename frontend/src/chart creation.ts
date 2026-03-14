import { Component, Input } from "@angular/core";

import { Creation } from "./creation";
import { RouterOutlet } from "@angular/router";
@Component({
    selector:"chart-creation",
    imports: [Creation, RouterOutlet],
    template:` <nav id="charts"><select #chartsMenu ><option></option></select><creation type="Chart" path="api"></creation></nav><router-outlet></router-outlet>`
})
export class ChartCreation{
    @Input() database:string="";
     api:string="newChart/database="+this.database+"&";
}   