import { Component, Input, ViewChild, ElementRef, Renderer2, createComponent } from "@angular/core";
import { Creation } from "./creation"; 

@Component({
    selector: "database-creation",
    imports:[Creation],
    template:`<nav><creation type="Database" namer="databaseName" #creation>
        @for(database of list; track database){
            <option>{{database}}</option>
        }
    </creation><button type="button" (click)="run()">Run</button></nav>`
})
export class DatabaseCreation{
    @Input() name:string="";
    @ViewChild("creation") creation:ElementRef;
    @ViewChild("renderer") renderer:Renderer2;
    list:[string]=[""];
    async displayDatabases(){
        const databaseList=await fetch("http://localhost:9000/viewDatabases");
       const databases=await databaseList.json();
       
       for(let database of databases){
        
         this.list.push(database);
       }
    }
    constructor(creation:ElementRef,  renderer:Renderer2){
        this.renderer=renderer;
         this.creation=creation;
         this.creation.nativeElement.focus();
        this.displayDatabases();
    } 
    async run(){
        const databases:HTMLSelectElement=document.getElementsByTagName("select")[0];
        const nameBox:HTMLInputElement=document.getElementById("databaseName") as HTMLInputElement;
        const name:string=nameBox.value;
        
        switch(databases.value){
            

            case "new":
                 
                await fetch("http://localhost:9000/createDatabase/"+name, {method:"POST"});
                break;
            
        }

    }
}