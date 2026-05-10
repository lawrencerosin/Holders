import { Component } from "@angular/core";
import { displayPropertyBoxes } from "./element manager";
@Component({
    selector:"chart-menu",
    template: "<select #chartMenu id='tableMenu' (change)='displayPropertiesToAdd()'><option></option></select>"
})
export class ChartMenu{
      displayPropertiesToAdd(){
        displayPropertyBoxes();
       }
    
}