import { Component, Input, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { ItemCreation} from "./item creation";

@Component({
    selector: "database-operations",
    imports: [ItemCreation],
    template:`<nav><item_creation type="Database" namer="databaseName">  </item_creation><select style="display:block" [innerHTML]="databaseMenu"></select><button type="button" (click)="run()">Run</button></nav>`
})
export class DatabaseOperations{
    @Input() name:string="";
    @ViewChild("databases") items:ElementRef;
    @ViewChild("renderer") renderer:Renderer2;
    databaseMenu:string="";
    async displayDatabases(){
        const databaseList=await fetch("http://localhost:9000/viewDatabases");
       const databases=await databaseList.json();
        
       for(let database of databases){
       
         this.databaseMenu+=`<option>${database}</option>`;
       }
    }
    constructor(items:ElementRef,  renderer:Renderer2){
        this.renderer=renderer;
         this.items=items; 
        this.displayDatabases();
    } 
    async run(){
        const databases:HTMLSelectElement=document.getElementsByTagName("select")[0];
        const nameBox:HTMLInputElement=document.getElementById("databaseName") as HTMLInputElement;
        const name:string=nameBox.value;
        
        switch(databases.value){
            

            case "new":
                 
                await fetch("http://localhost:9000/newDatabase/"+name, {method:"POST"});
                break;
            
        }

    }
}