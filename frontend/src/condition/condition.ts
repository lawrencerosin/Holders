import { Component } from "@angular/core";
import { Comparison } from "./comparison";
import { Boolean } from "./boolean"; 
@Component({
    selector:"condition",
    template: `<form id="conditions"><h1>Condition:</h1><span id="conditionCommand"><input placeholder="Property or Value"/><comparison></comparison><input placeholder="Property or Value"/><button type="button" (click)="removeCondition(removal)" #removal>Remove</button></span><button #adding (click)="addCondition(adding)" type="button">Add Condition</button></form>`,
    imports:[Comparison]
})
export class Condition{
   addCondition(current:HTMLButtonElement){
       const conditions:HTMLFormElement=document.getElementById("conditions") as HTMLFormElement;
       if(conditions!==null&&conditions.children[1]!==null){
           const condition:HTMLSpanElement=conditions.children[1].cloneNode(true) as HTMLSpanElement;
           conditions.insertBefore(condition, current);
       }

   }
   removeCondition(current:HTMLButtonElement){
      if(current!==null&&current.parentElement!==null&&current.parentElement.parentElement!==null){
            current.parentElement.parentElement.removeChild(current.parentElement);
      }
   }
}