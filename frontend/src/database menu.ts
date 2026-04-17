import { Component, Input } from "@angular/core";
import { displayPropertyBoxes } from "./element manager";
@Component({
    selector: "database-menu",
    template: "<select id='databaseMenu' #databaseMenu (change)='displayPropertiesToAdd()'><option></option></select>"
})
export class DatabaseMenu{
   displayPropertiesToAdd(){
    displayPropertyBoxes();
   }

}