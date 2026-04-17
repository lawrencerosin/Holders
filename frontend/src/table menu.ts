import { Component } from "@angular/core";
import { displayPropertyBoxes } from "./element manager";
@Component({
    selector:"table-menu",
    template: "<select #chartMenu id='tableMenu' (change)='displayPropertiesToAdd()'><option></option></select>"
})
export class TableMenu{
      displayPropertiesToAdd(){
        displayPropertyBoxes();
       }
    
}