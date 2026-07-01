import { Component, ApplicationRef} from "@angular/core";
import { Assignment } from "./assignment";
import { Condition } from "../condition/condition";
@Component({
    selector:"change",
    imports:[Assignment, Condition],
    template: "<form><assignment></assignment><button (click)='addAssignment()'>Add Assignment</button><condition></condition></form>"
})
export class Change{
    constructor(private appRef:ApplicationRef){

    }
    addAssignment(){

    }
}