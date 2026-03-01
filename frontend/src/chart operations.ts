import { Component } from "@angular/core";
import { Commands } from "./commands"; 
@Component({
    selector:"chart-operations",
    imports: [Commands],
    template:"<nav><commands></commands></nav>"
})
export class ChartOperations{

}